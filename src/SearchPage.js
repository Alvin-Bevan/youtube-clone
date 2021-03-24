import React from "react";
import ChannelRow from "./ChannelRow ";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnjsMaCWWsQDLCM_7ypcfw3mcBTIu59zZd7wS4O2Ag=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="TalkFCB"
        verified
        subs="465k"
        noOfVideos={1753}
        description="Welcome to TalkFCB. The YouTube channel providing a community for Barça fans to engage and stay up-to-date with the latest"
      />

      <hr />

      <VideoRow
        views="91k"
        subs="465k"
        description="Eric Abidal has spoken out for the first time since leaving Barcelona last year and he didn't hold back when discussing former president Josep Maria Bartomeu. He also spoke about Neymar's potential return to the club in 2019 and Lionel Messi's future..."
        timestamp="Mar 22, 2021"
        channel="TalkFCB"
        title="Eric Abidal SPEAKS out on Bartomeu, Neymar, Messi & Valverde in first interview since leaving Barça"
        image="https://i.ytimg.com/an_webp/984S45jRzzM/mqdefault_6s.webp?du=3000&sqp=CLTa6oIG&rs=AOn4CLBVSp2hCv_G4SUXsGdnm7LQq5jGTQ"
      />
      <VideoRow
        views="185k"
        subs="465k"
        description="Lionel Messi scored two excellent team goals, along with two goals from Sergiño Dest, and Antoine Griezmann and Ousmane Dembélé completed Barça's six-goal masterclass. What a win for Barça fans and what a huge step forward in the La Liga title race!"
        timestamp="Mar 21, 2021"
        channel="TalkFCB"
        title="Real Sociedad vs Barcelona [1-6], La Liga, 2020/21 - MATCH REVIEW"
        image= "https://i.ytimg.com/an_webp/WagxdxOhH2s/mqdefault_6s.webp?du=3000&sqp=CJCc64IG&rs=AOn4CLBnDDB4fG_lPpsUv7BUFJwd3dlZYQ"/>
      <VideoRow
        views="78k"
        subs="465k"
        description="Barça face a crucial test in the title race, as they head to the Anoeta to face Real Sociedad on Sunday. Will Ronald Koeman’s side continue their improved form? Especially given the boost the squad has received following the arrival of new president, Joan Laporta"
        timestamp="Mar 20, 2021"
        channel="TalkFCB"
        title="Real Sociedad vs Barcelona, La Liga 2020/21 - MATCH PREVIEW"
        image="https://i.ytimg.com/an_webp/-KX3GCiB5a4/mqdefault_6s.webp?du=3000&sqp=COSS64IG&rs=AOn4CLAIxWGovye4T5j4CO1FHaTrDG00uw"
        />
      <VideoRow
        views="168k"
        subs="465k"
        description="Lionel Messi scored a stunning long-range goal against PSG, but after missing a penalty just before half-time, it wasn't enough to deny Barça's Champions League elimination. Because after Kylian Mbappe scored for PSG once again, Ronald Koeman's side were faced with more frustration, in a game they truly deserved to win..."
        timestamp="Mar 10, 2021"
        channel="TalkFCB"
        title="PSG vs Barcelona [1-1], Champions League, Round of 16, 2nd Leg - MATCH REVIEW"
        image="https://i.ytimg.com/an_webp/7hdgaA7DfgM/mqdefault_6s.webp?du=3000&sqp=CPiP64IG&rs=AOn4CLB65vHBiqdy3YBJeJDpsONEOjRMTQ"
      />
      <VideoRow
        views="119k"
        subs="465k"
        description=""
        timestamp="Mar 22, 2021"
        channel="TalkFCB"
        title="JOAN LAPORTA IS THE NEW BARCELONA PRESIDENT!"
        image="https://i.ytimg.com/an_webp/-We1gDt1AUA/mqdefault_6s.webp?du=3000&sqp=CMCU64IG&rs=AOn4CLBPnO-2dWf9xZvQrqyk14zMt2AAKg"
      />
      <VideoRow
        views="85k"
        subs="465k"
        description="It was another Copa del Rey comeback for Barça, after Ousmane Dembélé, Gerard Piqué and Martin Braithwaite scored the goals to secure the victory over Sevilla. What a night for Ronald Koeman - especially ahead of the Champions League.."
        timestamp="Mar 4, 2021"
        channel="TalkFCB"
        title="Analysing Barcelona's stunning comeback against Sevilla to reach the Copa del Rey final!"
        image="https://i.ytimg.com/an_webp/DQrDXx6rXx4/mqdefault_6s.webp?du=3000&sqp=CN7v6oIG&rs=AOn4CLA2jy_BsSPH1B7DBycoVhKsRHA6Iw"
      />
      <VideoRow
        views="157k"
        subs="465k"
        description="Barça produced an incredible late comeback against Granada to reach the Copa del Rey semi-finals with Lionel Messi and Antoine Griezmann playing starring roles. Griezmann scored twice, along with Frenkie de Jong and Jordi Alba (2) - who scored an amazing volley in extra-time. What a result, what a match!"
        timestamp="Feb 2, 2021"
        channel="TalkFCB"
        title="Granada vs Barcelona [3-5], Copa del Rey, Quarter-Final, 2021 - MATCH REVIEW"
        image="https://www.bing.com/images/blob?bcid=SND66E1lMooClg"
      />
    </div>
  );
}

export default SearchPage;
