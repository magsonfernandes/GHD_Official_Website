const MEDIA_TIMEOUT_MS = 20_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | void> {
  return Promise.race([
    promise,
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, ms);
    }),
  ]);
}

function waitForImage(img: HTMLImageElement): Promise<void> {
  const src = img.currentSrc || img.src;
  if (!src) return Promise.resolve();

  if (img.complete && img.naturalHeight > 0) {
    return Promise.resolve();
  }

  img.loading = "eager";

  return new Promise((resolve) => {
    const done = () => resolve();

    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });

    const preload = new window.Image();
    preload.addEventListener("load", done, { once: true });
    preload.addEventListener("error", done, { once: true });
    preload.src = src;
  });
}

function waitForVideo(video: HTMLVideoElement): Promise<void> {
  const src = video.currentSrc || video.src;
  if (!src) return Promise.resolve();

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const done = () => resolve();

    video.addEventListener("canplaythrough", done, { once: true });
    video.addEventListener("loadeddata", done, { once: true });
    video.addEventListener("error", done, { once: true });

    // Autoplay hero videos are already loading — never call load() or it resets sizing.
    if (!video.autoplay) {
      video.preload = "auto";
      try {
        video.load();
      } catch {
        done();
      }
    }
  });
}

function collectMediaElements(container: HTMLElement) {
  return {
    images: Array.from(container.querySelectorAll("img")),
    videos: Array.from(container.querySelectorAll("video")),
  };
}

export async function waitForPageMedia(container: HTMLElement): Promise<void> {
  await document.fonts.ready.catch(() => undefined);

  const { images, videos } = collectMediaElements(container);

  await Promise.all([
    ...images.map((image) => withTimeout(waitForImage(image), MEDIA_TIMEOUT_MS)),
    ...videos.map((video) => withTimeout(waitForVideo(video), MEDIA_TIMEOUT_MS)),
  ]);
}

export async function waitForPageMediaWithUpdates(
  container: HTMLElement,
): Promise<void> {
  await waitForPageMedia(container);

  // Catch images/videos mounted shortly after first paint (carousels, etc.)
  await new Promise((resolve) => window.setTimeout(resolve, 150));
  await waitForPageMedia(container);

  const observer = new MutationObserver(() => {
    void waitForPageMedia(container);
  });

  observer.observe(container, { childList: true, subtree: true });
  await new Promise((resolve) => window.setTimeout(resolve, 300));
  observer.disconnect();

  await waitForPageMedia(container);
}
