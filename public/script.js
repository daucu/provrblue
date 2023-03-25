(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 120,
  "yaw": 1.51,
  "class": "PanoramaCameraPosition",
  "pitch": 1.26
 },
 "id": "panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F8B86C08_EE8A_2CF9_41E4_649AD0136C08",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_ECAC5FE2_FE24_A95D_41C5_F5BC2A507C7D",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "id": "effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_camera"
  },
  {
   "media": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_camera"
  },
  {
   "media": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_camera"
  },
  {
   "media": "this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_camera"
  },
  {
   "media": "this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_camera"
  },
  {
   "media": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_camera"
  },
  {
   "media": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_camera"
  },
  {
   "media": "this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_camera"
  },
  {
   "media": "this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_camera"
  },
  {
   "media": "this.album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD",
   "start": "this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false); this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true, -1, this.effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false, -1, this.effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4, 'hideEffect', false)"
  },
  {
   "media": "this.album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B",
   "start": "this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false); this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true, -1, this.effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false, -1, this.effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4, 'hideEffect', false)"
  },
  {
   "media": "this.album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538",
   "start": "this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false); this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true, -1, this.effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false, -1, this.effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4, 'hideEffect', false)"
  },
  {
   "media": "this.album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D",
   "start": "this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false); this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true, -1, this.effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false, -1, this.effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4, 'hideEffect', false)"
  },
  {
   "media": "this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_camera"
  },
  {
   "media": "this.album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327",
   "start": "this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true)",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0); this.keepComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false); this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, true, -1, this.effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75, 'showEffect', false)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.setComponentVisibility(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60, false, -1, this.effect_F374C6DC_EACE_CF5A_41D2_55ABF5B7E6F4, 'hideEffect', false); this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Photo Album 01",
 "thumbnailUrl": "media/album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_t.png",
 "playList": "this.album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_AlbumPlayList",
 "id": "album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD",
 "class": "PhotoAlbum"
},
{
 "label": "Photo Album 01",
 "thumbnailUrl": "media/album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_t.png",
 "playList": "this.album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_AlbumPlayList",
 "id": "album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 120,
  "yaw": 10.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1EA4B443_0DEE_28A5_4193_05478E57F265",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "02",
 "id": "album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_0",
 "thumbnailUrl": "media/album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_0_t.jpg",
 "width": 1920,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonPlayRight": "this.IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1",
 "buttonZoomOut": "this.IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA",
 "displayPlaybackBar": true,
 "buttonPause": "this.IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveUp": "this.IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953",
 "viewerArea": "this.MainViewer",
 "buttonZoomIn": "this.IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3",
 "buttonMoveRight": "this.IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F",
 "class": "PanoramaPlayer",
 "buttonMoveLeft": "this.IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082",
 "buttonPlayLeft": "this.IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A",
 "buttonMoveDown": "this.IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B",
 "buttonCardboardView": "this.IconButton_EE91CB31_FE2D_A93F_41DE_40BB619C81A1",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F88B9360_EE8A_7B29_41D4_4D932B03FBC9",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 55.39,
   "backwardYaw": 49.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F",
   "distance": 1
  },
  {
   "yaw": 55.3,
   "backwardYaw": -103.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F89ED4CF_EE8A_1D77_41D8_78EE0607CE99"
 ],
 "hfov": 360,
 "label": "reception hotel",
 "id": "panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE",
 "thumbnailUrl": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F83A2C51_EA5E_42AA_4196_50F00970005A",
  "this.overlay_F8AC0C3A_EA5A_C2DE_41EA_83371FCB4C85"
 ]
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F89FEA40_EE8A_3569_41D8_1F01FE130632",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 137.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1EF9F3DC_0DEE_2FA3_41A7_6C97AD8D575C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Photo Album 01",
 "thumbnailUrl": "media/album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_t.png",
 "playList": "this.album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_AlbumPlayList",
 "id": "album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_1F9D8A00_0DFA_58A3_4193_B2E56BE87440",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_1F10736C_0DEE_2F63_418E_16CC9EC06E4C",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -120.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1EC623B2_0DEE_2FE7_41A5_4CB571E1DD04",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 49.49,
   "backwardYaw": 55.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F885001F_EE8A_3517_41C8_AB80ADE52102"
 ],
 "hfov": 360,
 "label": "cafe",
 "id": "panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F",
 "thumbnailUrl": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F8971EF6_EA46_5F56_41DB_D99D2B04A960"
 ]
},
{
 "duration": 5000,
 "label": "01",
 "id": "album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_0",
 "thumbnailUrl": "media/album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_0_t.jpg",
 "width": 1920,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -35.53,
   "backwardYaw": 83.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C",
   "distance": 1
  },
  {
   "yaw": -42.74,
   "backwardYaw": -86.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651",
   "distance": 1
  },
  {
   "yaw": 35.18,
   "backwardYaw": -169.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977",
   "distance": 1
  },
  {
   "yaw": -19.3,
   "backwardYaw": 78.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F9DACDE4_EE8A_2F29_41E3_021CAE42A808"
 ],
 "hfov": 360,
 "label": "elevation-2",
 "id": "panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
 "thumbnailUrl": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_FB349EE0_EA4A_BF6A_419A_534AD48DBE9F",
  "this.overlay_FB1721D3_EA4E_45AE_41E1_01C13202EC84",
  "this.overlay_FB8729B2_EA4B_C5EE_41DB_A89AA9BBEEE9",
  "this.overlay_FBA2A9B1_EE8E_172B_41DD_9091DBEB51C5"
 ]
},
{
 "label": "Photo Album 01",
 "thumbnailUrl": "media/album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_t.png",
 "playList": "this.album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_AlbumPlayList",
 "id": "album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B",
 "class": "PhotoAlbum"
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F885001F_EE8A_3517_41C8_AB80ADE52102",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -103.38,
   "backwardYaw": 55.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE",
   "distance": 1
  },
  {
   "yaw": -73.98,
   "backwardYaw": 59.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F88B9360_EE8A_7B29_41D4_4D932B03FBC9"
 ],
 "hfov": 360,
 "label": "room hotel",
 "id": "panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189",
 "thumbnailUrl": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F8FC705B_EA5B_C35E_41BE_9D222643CA55",
  "this.overlay_EC0684BA_FE24_9F22_41EA_9724C6927D34"
 ]
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "buttonZoomOut": "this.IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA",
 "buttonZoomIn": "this.IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "id": "effect_F374D6DC_EACE_CF5A_41E6_91C30C768F75",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "yaw": 78.25,
   "backwardYaw": -19.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F89FEA40_EE8A_3569_41D8_1F01FE130632"
 ],
 "hfov": 360,
 "label": "garment shop",
 "id": "panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06",
 "thumbnailUrl": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_FB896580_EA5B_CDAA_41E9_2A8665B750AE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -86.67,
   "backwardYaw": -42.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F8B86C08_EE8A_2CF9_41E4_649AD0136C08"
 ],
 "hfov": 360,
 "label": "shoe shop",
 "id": "panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651",
 "thumbnailUrl": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F8413077_EA5E_C356_41D8_96EDFF8F9AC9"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F9DACDE4_EE8A_2F29_41E3_021CAE42A808",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "duration": 5000,
 "label": "01",
 "id": "album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_0",
 "thumbnailUrl": "media/album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_0_t.jpg",
 "width": 1920,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "label": "Photo Album 02",
 "thumbnailUrl": "media/album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_t.png",
 "playList": "this.album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_AlbumPlayList",
 "id": "album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "media": "this.panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_camera"
  },
  {
   "media": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_camera"
  },
  {
   "media": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_camera"
  },
  {
   "media": "this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_camera"
  },
  {
   "media": "this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_camera"
  },
  {
   "media": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_camera"
  },
  {
   "media": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_camera"
  },
  {
   "media": "this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_camera"
  },
  {
   "media": "this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_camera"
  },
  {
   "media": "this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_camera"
  }
 ],
 "id": "ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -144.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1ECD23CC_0DEE_2FA3_41A6_01AC42C497CB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_1F9D8A00_0DFA_58A3_4193_B2E56BE87440.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1077
   }
  ]
 },
 "label": "Final",
 "id": "map_1F9D8A00_0DFA_58A3_4193_B2E56BE87440",
 "thumbnailUrl": "media/map_1F9D8A00_0DFA_58A3_4193_B2E56BE87440_t.png",
 "width": 4961,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "height": 1671,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "id": "panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F89ED4CF_EE8A_1D77_41D8_78EE0607CE99",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1F2EF39E_0DEE_2FDF_4193_08FCE83018EB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "01",
 "id": "album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_0",
 "thumbnailUrl": "media/album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_0_t.jpg",
 "width": 1920,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1E9B7412_0DEE_28A7_419B_7DCB19754A22",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1EE973F8_0DEE_2F63_41A0_4E14323F6B88",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1EB4F433_0DEE_28E5_419C_6B1E287A3144",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_EDC5FE9A_FE24_EBED_41DB_FE755BE057C8",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977"
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_ECAC5FE2_FE24_A95D_41C5_F5BC2A507C7D"
 ],
 "hfov": 360,
 "label": "Exterior ",
 "id": "panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663",
 "thumbnailUrl": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EF952479_FE2C_9F2F_41D6_D36A15A578C1"
 ]
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedBackgroundColor": "#202020",
 "children": [
  {
   "label": "Exterior ",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "elevation1",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "elevation-2",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "cafe",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "garment shop",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "reception hotel",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "room hotel",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "saloon shop",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "shoe shop",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "Toilet",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "rollOverOpacity": 0.8,
 "selectedFontColor": "#FFFFFF",
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "opacity": 0.4
},
{
 "adjacentPanoramas": [
  {
   "yaw": 83.22,
   "backwardYaw": -35.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_F88EDDC8_EE8A_6F79_41BD_E762BE1A7A2F"
 ],
 "hfov": 360,
 "label": "saloon shop",
 "id": "panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C",
 "thumbnailUrl": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F86AC0D6_EA5A_4357_41DC_869A7229AF78"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_1F9D8A00_0DFA_58A3_4193_B2E56BE87440",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_1F10B36C_0DEE_2F63_41A4_CF11C03A8994",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1F3A2388_0DEE_2FA4_41A6_3B2B4AD32BE7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1F0CD37E_0DEE_2F5F_41A8_CFD687BC3B83",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1ED5C3A8_0DEE_2FE3_41A3_E1BD85974486",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -101.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1E57045A_0DEE_28A7_41A9_309270DD4C8F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F88EDDC8_EE8A_6F79_41BD_E762BE1A7A2F",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 59.16,
   "backwardYaw": -73.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "audios": [
  "this.audio_EDC5FE9A_FE24_EBED_41DB_FE755BE057C8"
 ],
 "hfov": 360,
 "label": "Toilet",
 "id": "panorama_EE34AB42_FE2C_695D_41E1_460085597A0F",
 "thumbnailUrl": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ECE56FF8_FE25_E92D_41C1_DF9D10C8BAF2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1E8AE423_0DEE_28E5_418F_678AE40F0D64",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "01",
 "id": "album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_0",
 "thumbnailUrl": "media/album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_0_t.jpg",
 "width": 1920,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "class": "PanoramaAudio",
 "id": "audio_F896DF20_EE8A_EB29_41C5_111D93FE761A",
 "data": {
  "label": "please-calm-my-mind-125566"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE"
  },
  {
   "yaw": -169.32,
   "backwardYaw": 35.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190",
   "distance": 1
  }
 ],
 "hfovMin": "119%",
 "audios": [
  "this.audio_F896DF20_EE8A_EB29_41C5_111D93FE761A"
 ],
 "hfov": 360,
 "label": "elevation1",
 "id": "panorama_E0152A82_EA3A_47AE_41E7_26528FE44977",
 "thumbnailUrl": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_1F1C5370_0DEE_2F63_4187_61E3F7291E2B",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_FA2D948A_EA7A_43BE_41B5_795D4435AA84",
  "this.overlay_FBA5D6FE_EA59_CF56_41DD_C90F3592C5A8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -130.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1F230393_0DEE_2FA5_41A0_373F23E98A88",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#006699",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "class": "ThumbnailList",
 "minHeight": 20,
 "horizontalAlign": "left",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "width": "64.536%",
 "itemThumbnailShadowOpacity": 0.27,
 "itemPaddingRight": 3,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "itemBorderRadius": 0,
 "paddingRight": 20,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "height": 133,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.31,
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemThumbnailShadowVerticalLength": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 20,
 "playList": "this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "paddingLeft": 20,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 13,
 "paddingBottom": 10,
 "itemLabelGap": 8,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 100,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "data": {
  "name": "Container31983"
 },
 "children": [
  "this.Container_FCB6F434_EAC9_C2EA_41C7_C7E7C3EB49F5"
 ],
 "layout": "horizontal",
 "left": 974,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_FCB67435_EAC9_C2EA_41C7_D42720F2FCF5",
 "class": "Container",
 "minHeight": 20,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "38.84%",
 "minWidth": 20,
 "bottom": "15.3%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 137,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "data": {
  "name": "Container27661"
 },
 "children": [
  "this.IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA",
  "this.IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A",
  "this.IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082",
  "this.Container_FCBE50B2_EAC6_43EE_41E3_28A086558660",
  "this.IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F",
  "this.IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1",
  "this.IconButton_FD2D3830_EAC6_42EA_4187_FD17F2DED54A",
  "this.IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3",
  "this.IconButton_EDF4AD5A_FDEC_A331_41E1_3F2A438966E2",
  "this.IconButton_EDEA9793_FDE4_EF30_41D2_74942AA61C6D",
  "this.IconButton_EE91CB31_FE2D_A93F_41DE_40BB619C81A1",
  "this.IconButton_EF0DE3C4_FE24_7965_41D6_A3A262F9CFE2"
 ],
 "layout": "horizontal",
 "width": 539.47,
 "scrollBarColor": "#000000",
 "id": "Container_FCBFC0B2_EAC6_43EE_41E2_34E56BE326C8",
 "class": "Container",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "28.77%",
 "minWidth": 20,
 "horizontalAlign": "center",
 "bottom": "17.05%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 137.04,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "backgroundColorRatios": [
  0,
  0,
  0.95,
  1,
  1,
  1,
  1,
  1
 ],
 "data": {
  "name": "Container6474"
 },
 "children": [
  "this.MapViewer"
 ],
 "layout": "absolute",
 "id": "Container_02CD56E2_0D9D_E967_417A_78F205A6F5A8",
 "left": "10.6%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "horizontal",
 "scrollBarVisible": "rollOver",
 "right": "10.62%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "31.58%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#000000",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "top": "11.28%",
 "paddingTop": 0,
 "backgroundOpacity": 0.56,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent10526"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage10527"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton10528"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "id": "IconButton_FD2D3830_EAC6_42EA_4187_FD17F2DED54A",
 "width": 38.69,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 1,
 "maxWidth": 128,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FD2D3830_EAC6_42EA_4187_FD17F2DED54A.png",
 "toolTipFontWeight": "normal",
 "maxHeight": 128,
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 33.53,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Fullscreen on/off",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton1493"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 40,
 "id": "IconButton_EF0DE3C4_FE24_7965_41D6_A3A262F9CFE2",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_EF0DE3C4_FE24_7965_41D6_A3A262F9CFE2.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Mute/Unmute",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_EF0DE3C4_FE24_7965_41D6_A3A262F9CFE2_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button31994"
 }
},
{
 "id": "audioresource_F896CF20_EE8A_EB29_41C3_BB4003AF66CC",
 "oggUrl": "media/audio_F9DACDE4_EE8A_2F29_41E3_021CAE42A808.ogg",
 "class": "AudioResource"
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.64",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F2D0D508_EAFA_C2BA_41E2_B046AF840ABD_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.46",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.75"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F2BC173D_EAFE_4EDA_41EA_5345FD1B7327_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 40,
 "id": "IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Autorotate right",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBFB0B2_EAC6_43EE_41DD_EE4909F5F6D1_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27671"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Zoom Out",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE10B2_EAC6_43EE_41D8_99EB7343B7AA_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27662"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 40,
 "id": "IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Pause",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27668"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Up",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27667"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Zoom in",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBFD0B2_EAC6_43EE_41D2_30F124E830A3_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27673"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Right",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBF90B2_EAC6_43EE_41CF_0A4857A52C1F_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27670"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Left ",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE20B2_EAC6_43EE_41B7_B4B0E1DD6082_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27665"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 40,
 "id": "IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Autorotate Left",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE30B2_EAC6_43EE_41EC_568C754B974A_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27664"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "toolTipPaddingTop": 4,
 "width": 32,
 "id": "IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B",
 "class": "IconButton",
 "minHeight": 0,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 0,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B.png",
 "toolTipFontWeight": "normal",
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 32,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Down",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B_rollover.png",
 "toolTipBorderRadius": 3,
 "toolTipShadowOpacity": 1,
 "pressedIconURL": "skin/IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B_pressed.png",
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "Button27669"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "id": "IconButton_EE91CB31_FE2D_A93F_41DE_40BB619C81A1",
 "width": 42,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": 12,
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 1,
 "maxWidth": 42,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_EE91CB31_FE2D_A93F_41DE_40BB619C81A1.png",
 "toolTipFontWeight": "normal",
 "maxHeight": 42,
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 42,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "VR Mode",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton13323"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.37,
   "image": "this.AnimatedImageResource_F4EFACFE_EAC6_C356_41C8_FA68262EABD0",
   "pitch": -2.23,
   "yaw": 55.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189, this.camera_1F2EF39E_0DEE_2FDF_4193_08FCE83018EB); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Hotel room"
  }
 ],
 "id": "overlay_F83A2C51_EA5E_42AA_4196_50F00970005A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.37,
   "yaw": 55.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.97,
   "image": "this.AnimatedImageResource_F4EE1CFE_EAC6_C356_41E5_398B2F9260FB",
   "pitch": 7.85,
   "yaw": 55.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F, this.camera_1F230393_0DEE_2FA5_41A0_373F23E98A88); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Cafeteria "
  }
 ],
 "id": "overlay_F8AC0C3A_EA5A_C2DE_41EA_83371FCB4C85",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.97,
   "yaw": 55.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.38"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F2BC39F0_EAFE_456A_41E3_76F1DCDFF65D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.29,
   "image": "this.AnimatedImageResource_F9CAD4F9_EA46_435A_41E3_FE6D379AE5FD",
   "pitch": -1.82,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE, this.camera_1F3A2388_0DEE_2FA4_41A6_3B2B4AD32BE7); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Reception"
  }
 ],
 "id": "overlay_F8971EF6_EA46_5F56_41DB_D99D2B04A960",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.12,
   "image": "this.AnimatedImageResource_FFDB777D_EA4A_4D5A_41BC_D43B5404A399",
   "pitch": 0.27,
   "yaw": -19.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06, this.camera_1E57045A_0DEE_28A7_41A9_309270DD4C8F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Garment shop "
  }
 ],
 "id": "overlay_FB349EE0_EA4A_BF6A_419A_534AD48DBE9F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.12,
   "yaw": -19.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.59,
   "image": "this.AnimatedImageResource_FFDA977D_EA4A_4D5A_41E5_B441E0E8D2F6",
   "pitch": -0.23,
   "yaw": -35.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C, this.camera_1E8AE423_0DEE_28E5_418F_678AE40F0D64); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Salon"
  }
 ],
 "id": "overlay_FB1721D3_EA4E_45AE_41E1_01C13202EC84",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.59,
   "yaw": -35.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.19,
   "image": "this.AnimatedImageResource_FFDA277E_EA4A_4D56_41E0_9CACD3D6E8AD",
   "pitch": 0.41,
   "yaw": -42.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651, this.camera_1EB4F433_0DEE_28E5_419C_6B1E287A3144); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Shoe shop"
  }
 ],
 "id": "overlay_FB8729B2_EA4B_C5EE_41DB_A89AA9BBEEE9",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.19,
   "yaw": -42.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.27,
   "image": "this.AnimatedImageResource_F83CEA50_EE8A_1569_41CD_4202819A0FEA",
   "pitch": -3.92,
   "yaw": 35.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0152A82_EA3A_47AE_41E7_26528FE44977, this.camera_1EA4B443_0DEE_28A5_4193_05478E57F265); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_FBA2A9B1_EE8E_172B_41DD_9091DBEB51C5",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.27,
   "yaw": 35.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.46",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.41"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F2C84D58_EAFE_FD5A_41B7_F92BC6D4022B_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.53,
   "image": "this.AnimatedImageResource_F9CDF4FA_EA46_435E_41D4_00360F5C475A",
   "pitch": -3.08,
   "yaw": -103.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE, this.camera_1ED5C3A8_0DEE_2FE3_41A3_E1BD85974486); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Reception"
  }
 ],
 "id": "overlay_F8FC705B_EA5B_C35E_41BE_9D222643CA55",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.53,
   "yaw": -103.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.01,
   "image": "this.AnimatedImageResource_EC34B679_FE24_9B2F_41E8_1666FFA1402D",
   "pitch": -4.96,
   "yaw": -73.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE34AB42_FE2C_695D_41E1_460085597A0F, this.camera_1EC623B2_0DEE_2FE7_41A5_4CB571E1DD04); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EC0684BA_FE24_9F22_41EA_9724C6927D34",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.01,
   "yaw": -73.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "width": "95.931%",
 "toolTipOpacity": 1,
 "shadow": false,
 "right": "1.86%",
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#006699",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "-0.04%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "visible": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "MapViewer"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.32,
   "image": "this.AnimatedImageResource_F9CCF4FA_EA46_435E_41E6_B45BF01BC4EC",
   "pitch": -5.31,
   "yaw": 78.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190, this.camera_1E9B7412_0DEE_28A7_419B_7DCB19754A22); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Shops"
  }
 ],
 "id": "overlay_FB896580_EA5B_CDAA_41E9_2A8665B750AE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.32,
   "yaw": 78.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.32,
   "image": "this.AnimatedImageResource_F9CE84FA_EA46_435E_41D9_3A122EF8B847",
   "pitch": -2.43,
   "yaw": -86.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190, this.camera_1EF9F3DC_0DEE_2FA3_41A7_6C97AD8D575C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F8413077_EA5E_C356_41D8_96EDFF8F9AC9",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.32,
   "yaw": -86.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F2802840_EAFE_C2A9_41D4_54D4FC3EF538_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_ED9F72DF_FE2C_7B63_41E8_E78CBD26CF29",
   "pitch": -1.44,
   "yaw": -17.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF952479_FE2C_9F2F_41D6_D36A15A578C1",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -17.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_F9CD34FA_EA46_435E_41B5_40739AA2DA41",
   "pitch": -6.94,
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190, this.camera_1F0CD37E_0DEE_2F5F_41A8_CFD687BC3B83); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Shops"
  }
 ],
 "id": "overlay_F86AC0D6_EA5A_4357_41DC_869A7229AF78",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.59,
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.48,
   "image": "this.AnimatedImageResource_EC345679_FE24_9B2F_41E4_7A9EB0AECF80",
   "pitch": -6.47,
   "yaw": 59.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189, this.camera_1EE973F8_0DEE_2F63_41A0_4E14323F6B88); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ECE56FF8_FE25_E92D_41C1_DF9D10C8BAF2",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.48,
   "yaw": 59.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.76,
   "image": "this.AnimatedImageResource_F3664BC7_EA4A_45B6_41D7_0BC7E179DE7D",
   "pitch": -4.33,
   "yaw": -169.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190, this.camera_1ECD23CC_0DEE_2FA3_41A6_01AC42C497CB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Shops "
  }
 ],
 "id": "overlay_FA2D948A_EA7A_43BE_41B5_795D4435AA84",
 "data": {
  "label": "Shops"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.76,
   "yaw": -169.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.86,
   "image": "this.AnimatedImageResource_F9CB04F9_EA46_435A_41EB_B1A1F1F0480F",
   "pitch": -0.43,
   "yaw": -50.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Reception "
  }
 ],
 "id": "overlay_FBA5D6FE_EA59_CF56_41DD_C90F3592C5A8",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.86,
   "yaw": -50.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "Container31988"
 },
 "layout": "vertical",
 "width": 40,
 "scrollBarColor": "#000000",
 "id": "Container_FCB6F434_EAC9_C2EA_41C7_C7E7C3EB49F5",
 "class": "Container",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "data": {
  "name": "Container27666"
 },
 "children": [
  "this.IconButton_FCBE40B2_EAC6_43EE_41C6_172AC2036953",
  "this.IconButton_FCBE70B2_EAC6_43EE_41D2_DF2A32A6AE4C",
  "this.IconButton_FCBE60B2_EAC6_43EE_41D5_C732347F590B"
 ],
 "layout": "vertical",
 "width": 40,
 "scrollBarColor": "#000000",
 "id": "Container_FCBE50B2_EAC6_43EE_41E3_28A086558660",
 "class": "Container",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "id": "IconButton_EDF4AD5A_FDEC_A331_41E1_3F2A438966E2",
 "width": 37,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": "1.11vmin",
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 1,
 "maxWidth": 201,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_EDF4AD5A_FDEC_A331_41E1_3F2A438966E2.png",
 "toolTipFontWeight": "normal",
 "maxHeight": 201,
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 45,
 "click": "if(!this.Container_02CD56E2_0D9D_E967_417A_78F205A6F5A8.get('visible')){ this.setComponentVisibility(this.Container_02CD56E2_0D9D_E967_417A_78F205A6F5A8, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_02CD56E2_0D9D_E967_417A_78F205A6F5A8, false, 0, null, null, false) }; if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "Floor Plans On/Off",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton9250"
 }
},
{
 "toolTipFontFamily": "Arial",
 "toolTipShadowSpread": 0,
 "id": "IconButton_EDEA9793_FDE4_EF30_41D2_74942AA61C6D",
 "width": 51.45,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "shadow": false,
 "borderSize": 0,
 "toolTipFontSize": "1.11vmin",
 "transparencyActive": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "minWidth": 1,
 "maxWidth": 201,
 "toolTipTextShadowBlurRadius": 3,
 "iconURL": "skin/IconButton_EDEA9793_FDE4_EF30_41D2_74942AA61C6D.png",
 "toolTipFontWeight": "normal",
 "maxHeight": 201,
 "verticalAlign": "middle",
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 39.05,
 "click": "this.openLink('files/file_EFF0BD33_FDE7_E370_41DD_B2C0E731642C.pdf', '_blank'); this.openLink('files/file_EFF05D33_FDE7_E370_41C6_3DAF88D39C05.pdf', '_blank'); this.openLink('files/file_EFF07D33_FDE7_E370_41EF_18DA213D457E.pdf', '_blank')",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "toolTip": "View/Download PDF Files ",
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton10521"
 }
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F4EFACFE_EAC6_C356_41C8_FA68262EABD0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F4EE1CFE_EAC6_C356_41E5_398B2F9260FB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E074BAD0_EA3A_47AA_41DB_AAA30B45B9FE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CAD4F9_EA46_435A_41E3_FE6D379AE5FD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E132A9BE_EA3A_C5D6_41E2_3EF56EB9ED6F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FFDB777D_EA4A_4D5A_41BC_D43B5404A399",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FFDA977D_EA4A_4D5A_41E5_B441E0E8D2F6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FFDA277E_EA4A_4D56_41E0_9CACD3D6E8AD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F83CEA50_EE8A_1569_41CD_4202819A0FEA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07955B3_EA3A_4DEE_41E1_7E2E53CB3190_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CDF4FA_EA46_435E_41D4_00360F5C475A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EC34B679_FE24_9B2F_41E8_1666FFA1402D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07CB57A_EA3A_4D5E_41E3_86CBBA139189_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CCF4FA_EA46_435E_41E6_B45BF01BC4EC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E078A03D_EA3A_42DA_41E7_A5C92F373A06_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CE84FA_EA46_435E_41D9_3A122EF8B847",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07EBC34_EA3B_C2EA_41E8_6693D4441651_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED9F72DF_FE2C_7B63_41E8_E78CBD26CF29",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EE9C109C_FE2C_77E5_41E8_780DAFE8F663_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CD34FA_EA46_435E_41B5_40739AA2DA41",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E07F70A3_EA3B_C3EE_41E1_51282807696C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EC345679_FE24_9B2F_41E4_7A9EB0AECF80",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EE34AB42_FE2C_695D_41E1_460085597A0F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F3664BC7_EA4A_45B6_41D7_0BC7E179DE7D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9CB04F9_EA46_435A_41EB_B1A1F1F0480F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E0152A82_EA3A_47AE_41E7_26528FE44977_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60_playlist,this.mainPlayList]); this.playList_1F10736C_0DEE_2F63_418E_16CC9EC06E4C.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_FD2D3830_EAC6_42EA_4187_FD17F2DED54A].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player450"
 },
 "children": [
  "this.MainViewer",
  {
   "data": {
    "name": "Container452"
   },
   "children": [
    "this.ThumbnailList_F266BFCF_EAF9_BDB6_41D3_A61102929C60"
   ],
   "layout": "horizontal",
   "left": 0,
   "scrollBarOpacity": 0.5,
   "scrollBarColor": "#000000",
   "class": "Container",
   "minHeight": 20,
   "horizontalAlign": "center",
   "shadow": false,
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "minWidth": 20,
   "bottom": 0,
   "contentOpaque": false,
   "paddingRight": 0,
   "paddingLeft": 0,
   "scrollBarMargin": 2,
   "verticalAlign": "bottom",
   "height": 200,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "borderRadius": 0,
   "gap": 10,
   "paddingBottom": 0,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "overflow": "visible"
  },
  "this.Container_FCB67435_EAC9_C2EA_41C7_D42720F2FCF5",
  "this.Container_FCBFC0B2_EAC6_43EE_41E2_34E56BE326C8",
  "this.Container_02CD56E2_0D9D_E967_417A_78F205A6F5A8",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_FD2D3830_EAC6_42EA_4187_FD17F2DED54A",
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EF0DE3C4_FE24_7965_41D6_A3A262F9CFE2",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
