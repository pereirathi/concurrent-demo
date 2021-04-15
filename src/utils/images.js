const pixelRatio = 2

export const NOT_FOUND_IMAGE = '/static/img/product-not-found.png'

export const AUTO = {
  COMPRESS_FORMAT: 'compress,format',
}

export const FIT = {
  MAX: 'max',
  CROP: 'crop',
  CLIP: 'clip',
}

export const FORMAT = {
  JPEG: 'jp2',
}

export const MASK = {
  CORNERS: 'corners',
}

const isStaticImage = (url) => url.match('/static/img/') && process.env.IMAGES_CDN_URL

function isPngFile(url) {
  const extensionRegex = /\.png/
  return extensionRegex.test(url)
}

const getOptimizedUrl = (
  url,
  {
    mask, width, height, cornerRadius, ar = 0, fit = FIT.MAX, dpr = pixelRatio, auto = AUTO.COMPRESS_FORMAT,
  } = {},
// eslint-disable-next-line consistent-return
) => {
  try {
    if (!url) return NOT_FOUND_IMAGE

    let optimizedUrl = `${url}?auto=${auto}&fit=${fit}&w=${width}&h=${height}${ar ? `&ar=${ar}` : ''}&dpr=${dpr}`

    if (mask) optimizedUrl += `&mask=${mask}&corner-radius=${cornerRadius}`

    if (isPngFile(url)) optimizedUrl += '&fm=png'

    if (isStaticImage(url)) optimizedUrl = process.env.IMAGES_CDN_URL + optimizedUrl

    return optimizedUrl
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e)

    if (!url) return NOT_FOUND_IMAGE
  }
}

export default getOptimizedUrl
