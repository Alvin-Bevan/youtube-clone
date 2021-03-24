import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended </h1>
      <div className="recommendedVideo_videos">
        <VideoCard
          title="Sevilla Goalkeeper Bono Scores Last Minute Equalizer"
          views="196k"
          timestamp="Mar 21, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngzSuzv0j-Cg-GvcsNa0240cHxnVP3X8HrlQc3psu4=s48-c-k-c0x00ffffff-no-rj"
          channel="beIN SPORTS USA"
          image="https://i.ytimg.com/an_webp/7nJahL4OgmE/mqdefault_6s.webp?du=3000&sqp=COqv64IG&rs=AOn4CLA36V4U5ZqmSzu7p67YFYDR1XhP4g"
        />
        <VideoCard
          title="Pop Smoke - AP (Official Music Video)"
          views="3.2M"
          timestamp="6 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipEmSzLARfPFFisvktU5--KLEpHHiSQ0SA_O9yhQ=s88-c-k-c0x00ffffff-no-rj"
          channel="POP SMOKE"
          image="https://i.ytimg.com/an_webp/Yr2Nq-7mQoY/mqdefault_6s.webp?du=3000&sqp=CKKc64IG&rs=AOn4CLDCOJw8kt8g5FSXb-mfsXe_jh4Uhw"
        />
        <VideoCard
          title="Messi's last tricks at the Bernabeu 🔥 - 04/23/17 | beIN SPORTS USA"
          views="28k"
          timestamp="11 hours ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipEmSzLARfPFFisvktU5--KLEpHHiSQ0SA_O9yhQ=s88-c-k-c0x00ffffff-no-rj"
          channel="beIN SPORTS USA"
          image="https://i.ytimg.com/an_webp/kJMiefPOFd8/mqdefault_6s.webp?du=3000&sqp=CNOe64IG&rs=AOn4CLAevcENrba3JH1cPu9D0E5be6FItw"
        />
        <VideoCard
          title="Yet again in America: Mourning victims of yesterday's mass shooting"
          views="345k"
          timestamp="Mar 23, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwng1xfuRQEgV99Wq_kffyvHnKD75arUW0OpJVp2X=s48-c-k-c0x00ffffff-no-rj"
          channel="CNBC Television"
          image="https://www.bing.com/images/blob?bcid=SAjM6.dEvIoCsg"
        />
        <VideoCard
          title="10 New Features in Marvel's Spider-Man Remastered (PS5)"
          views="2.4M views"
          timestamp="Nov 23, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniOLt0_i6fCmjecVqrKRJ26su05PGQLsZ9mRiERww=s48-c-k-c0x00ffffff-no-rj"
          channel="ynSection"
          image="https://i.ytimg.com/an_webp/fqeRms9KWwo/mqdefault_6s.webp?du=3000&sqp=CNqn64IG&rs=AOn4CLDcLbmD6VYhBBUXdqSWjLOgSQ_ZmA"
        />
        <VideoCard
          title="EngIand vs BeIgium 3−1 - All Gоals & Extеndеd Hіghlіghts - 2021"
          views="289k Views"
          timestamp="Premiered 7 hours ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngkT8td6plSJ6W3SyWmmpEAkq3DUsqEg5_4lBpf=s48-c-k-c0x00ffffff-no-rj"
          channel="Fort_Pink"
          image="https://sportshub.cbsistatic.com/i/r/2018/06/28/031180a4-1cb7-4fd6-a7c6-4f7eb4c4e46b/thumbnail/1200x675/1bc02c4115337b9578ac16af04c8677e/gettyimages-986354890-england-belgium-world-cup-2018.jpg"
        />
        <VideoCard
          title="MORTAL KOMBAT Trailer (2021)"
          views="5.4M views"
          timestamp="Feb 18, 20201"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEpBRtXjD4nMrOazgmusT40fTj3SrWMjWlgHTM=s48-c-k-c0x00ffffff-no-rj"
          channel="ONE Media"
          image="https://i.ytimg.com/vi/NYH2sLid0Zc/maxresdefault.jpg"
        />
        <VideoCard
          title="Pop Smoke ft. Quavo - Aim For The Moon (Official Music Video) ft. Quavo🎵"
          views="32M views"
          timestamp="Oct 26, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnipEmSzLARfPFFisvktU5--KLEpHHiSQ0SA_O9yhQ=s48-c-k-c0x00ffffff-no-rj-mo"
          channel="POP SMOKE"
          image="https://i.ytimg.com/an_webp/Qh2UmXaa-4E/mqdefault_6s.webp?du=3000&sqp=CMqd64IG&rs=AOn4CLC6DxONlH8-8y_91huTnjFZP9GlAg"
        />
        <VideoCard
          title="King Von Ft. YNW Melly - Rollin (Official Music Video)"
          views="9.1 M views"
          timestamp="1 year ago"
          channelImage="https://naijaremix.net/wp-content/uploads/2019/11/VIDEO_King_Von_Ft_YNW_Melly_-_Rolling.jpg"
          channel="King Von"
          image="https://www.bing.com/images/blob?bcid=SNs47Zx3V4oCFw"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
