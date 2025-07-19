import type React from "react"

interface YouTubePlayerProps {
  videoid: string
  width?: string | number
  height?: string | number
  playlabel?: string
  params?: string
  style?: React.CSSProperties
}

export default function YouTubePlayer({
  videoid,
  width = "100%",
  height = 400,
  playlabel = "Play video",
  params = "controls=1",
  style,
}: YouTubePlayerProps) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <iframe
        width={width}
        height={height}
        style={style}
        src={`https://www.youtube.com/embed/${videoid}?${params}`}
        title={playlabel}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}

      />
    </div>
  )
}


// import type React from "react"
// import { YouTubeEmbed } from "@next/third-parties/google"

// interface YouTubePlayerProps {
//   videoid: string
//   width?: string | number
//   height?: string | number
//   playlabel?: string
//   params?: string
//   style?: React.CSSProperties
// }
// export default function YouTubePlayer({
//   videoid,
//   width = "100%",
//   height = 400,
//   playlabel = "Play video",
//   params = "controls=1",
//   style,
// }: YouTubePlayerProps) {
//   return (
//     <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
//       <YouTubeEmbed
//         videoid={videoid}
//         width={width}
//         height={height}
//         playlabel={playlabel}
//         params={params}
//         style={style}
//       />
//     </div>
//   )
// }
