const express = require("express");
const axios = require("axios").default;
const app = express();

app.use(express.json());

app.get("/api/yplaylist", async (req, res) => {
  const { maxResults } = req.query;
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const CHANNEL_ID = process.env.CHANNEL_ID;

  // const url = maxResults
  //   ? `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=${maxResults}&type=video&order=date`
  //   : `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${CHANNEL_ID}&type=video&order=date`;

  // const { data } = await axios.get(url, {
  //   headers: { "Context-Type": "application/json" },
  // });

  res.status(200).json(testData);
});

module.exports = app;

// Youtube API 할당량이 상당히 작아서 임시 데이터로 대체함
const testData = {
  kind: "youtube#searchListResponse",
  etag: "1uJvYPgX-yRiGUwa6azjG9aEBt8",
  nextPageToken: "CAYQAA",
  regionCode: "KR",
  pageInfo: {
    totalResults: 61,
    resultsPerPage: 6,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "eFCiLeSM8X5KhLstraB-0l6G3QQ",
      id: {
        kind: "youtube#video",
        videoId: "9DUfM8mGF9M",
      },
      snippet: {
        publishedAt: "2022-04-04T14:39:04Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2022-04-03 풋도그 석수체육공원 내전",
        description:
          "2022-04-03 풋도그 석수체육공원 내전 안양/의왕/군포 친목축구모임 축구,풋살 하고 싶으신 분은 아래 링크로 문의하시기 바랍니다.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/9DUfM8mGF9M/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/9DUfM8mGF9M/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/9DUfM8mGF9M/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2022-04-04T14:39:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "nlhoNduWde8Dje5ETxUvtSkqvZQ",
      id: {
        kind: "youtube#video",
        videoId: "GL5uuEqLtuU",
      },
      snippet: {
        publishedAt: "2021-12-05T11:08:19Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2021-12-05 풋도그 vs 구룡 FC 비산체육공원",
        description:
          "2021-12-05 풋도그 vs 구룡 FC 비산체육공원 ---------------------------------------------------------------------------- 00:00 - Intro 00:18 - 1쿼터 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/GL5uuEqLtuU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/GL5uuEqLtuU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/GL5uuEqLtuU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2021-12-05T11:08:19Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vykc_fdQ_VZtTeqFLEY7Ul-S_wI",
      id: {
        kind: "youtube#video",
        videoId: "bmobVwuUBPk",
      },
      snippet: {
        publishedAt: "2021-12-02T15:52:20Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2021-11-28 풋도그 내전 석수체육공원",
        description:
          "2021-11-28 풋도그 내전 석수체육공원 ---------------------------------------------------------------------------- 00:00 - 단체사진 00:02 - 1쿼터 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/bmobVwuUBPk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/bmobVwuUBPk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/bmobVwuUBPk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2021-12-02T15:52:20Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Z65K_rSdAixXsSOyHYDC29wttdU",
      id: {
        kind: "youtube#video",
        videoId: "K8ucSg-gEPI",
      },
      snippet: {
        publishedAt: "2021-07-25T19:30:55Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2021-07-25 풋도그 vs 아르마다 매칭 의왕축구장",
        description:
          "2021-07-25 풋도그 vs 아르마다 매칭 의왕축구장 ---------------------------------------------------------------------------- 00:00 - 1쿼터 29:31 - 2 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/K8ucSg-gEPI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/K8ucSg-gEPI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/K8ucSg-gEPI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2021-07-25T19:30:55Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "gtpIHR-QK__Z9EN7_dwcMeZd248",
      id: {
        kind: "youtube#video",
        videoId: "3_S0RVaJUYA",
      },
      snippet: {
        publishedAt: "2021-07-12T13:21:59Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2021-07-11 의왕축구장 풋도그 내전",
        description:
          "2021-07-11 의왕축구장 풋도그 내전 ------------------------------------- 00:00 - 1쿼터 21:59 - 2쿼터 49:38 - 3쿼터 1:15:51 - 4쿼터 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/3_S0RVaJUYA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/3_S0RVaJUYA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/3_S0RVaJUYA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2021-07-12T13:21:59Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vi--QrGQPOn02xHkT2--9nw_VLc",
      id: {
        kind: "youtube#video",
        videoId: "ASTIX7rEjqQ",
      },
      snippet: {
        publishedAt: "2021-07-07T10:38:38Z",
        channelId: "UCwJHpMFBuEcoTxIDXMOMrhg",
        title: "2021-07-04 석수체육공원 풋도그 내전",
        description:
          "2021-07-04 석수체육공원 풋도그 내전 ------------------------------------------------------------------------- 00:00 몸풀기 및 신입 회원 소개 00:45 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ASTIX7rEjqQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ASTIX7rEjqQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ASTIX7rEjqQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "FC풋도그",
        liveBroadcastContent: "none",
        publishTime: "2021-07-07T10:38:38Z",
      },
    },
  ],
};
