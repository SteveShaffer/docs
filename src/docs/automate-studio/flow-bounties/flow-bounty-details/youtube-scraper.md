<!--TODO: Replace all references to "VDA", "Developer Application", and "Developer App" with "Veritone Developer"-->
<style>
    #claim-this-flow-btn {
        display: block;
        color: #2F80ED;
        border: 1px solid #2F80ED;
        width: 170px;
        height: 30px;
        text-align: center;
        padding: 3px;
        position: relative;
        text-decoration: none;
        left: 40%;
    }
</style>
# Youtube Scraper

[status/Development/Undeveloped/red]


## Overview <!-- {docsify-ignore} -->
This flow accepts a payload including a YouTubeVideoId value that it then uses to ingest a video. It then transcribes the video, and runs topic extraction on that transcript. The topic transcription results are written to an SDO which is then correlated to that TDO that was created.

<a target="_blank" href="https://forms.gle/tkVjfrtyBDrXyoji7" id="claim-this-flow-btn">CLAIM THIS FLOW!</a>
<hr>