// Maps R2 folder keys to clean API structure.
// Each video's `key` is the exact R2 object key (folder/filename).
// Add new terms here as content is uploaded to R2.

const catalog = [
  {
    classGroup: "LKG",
    label: "Lower Kindergarten",
    terms: [
      {
        term: 1,
        label: "Term 1",
        folder: "GENIUS_LKG-term 1",
        videos: [
          "Page_11.mp4","Page_13.mp4","Page_15.mp4","Page_16.mp4","Page_17.mp4",
          "Page_19.mp4","Page_20.mp4","Page_21.mp4","Page_34.mp4","Page_39.mp4",
          "Page_40.mp4","Page_42.mp4","Page_44.mp4","Page_45.mp4","Page_47.mp4",
          "Page_49.mp4","Page_51.mp4","Page_52.mp4","Page_54.mp4","Page_56.mp4",
          "Page_58.mp4","Page_59.mp4","Page_61.mp4","Page_63.mp4","Page_64.mp4",
          "Page_66.mp4","Page_70.mp4","Page_72.mp4","Page_76.mp4","Page_78.mp4",
          "Page_81.mp4","Page_b.mp4",
          "The Thirsty Crow .mp4","The lion and mouse new.mp4"
        ],
      },
      {
        term: 3,
        label: "Term 3",
        folder: "Genius_LKG_Term_3_Mp4",
        videos: [
          "Page_28.mp4","Page_29.mp4","Page_30.mp4","Page_31.mp4","Page_32.mp4",
          "Page_34.mp4","Page_35.mp4","Page_36.mp4","Page_37.mp4","Page_40.mp4",
          "Page_42.mp4","Page_43.mp4","Page_45 .mp4","Page_46.mp4","Page_47.mp4",
          "Page_48.mp4","Page_49.mp4","Page_50.mp4","Page_52 _54.mp4","Page_55.mp4",
          "Page_63, 64.mp4","Page_96.mp4","Page_97.mp4","Page_99.mp4",
          "Page_101.mp4","Page_102.mp4","Page_103.mp4","Page_106.mp4","Page_108.mp4",
          "Page_110.mp4","Page_112.mp4","Page_114.mp4","Page_115.mp4","Page_118.mp4",
          "Page_119.mp4","Page_120.mp4","Page_121.mp4","Page_123.mp4","Page_124.mp4",
          "The Greedy Dog.mp4"
        ],
      },
    ],
  },
  {
    classGroup: "UKG",
    label: "Upper Kindergarten",
    terms: [
      {
        term: 1,
        label: "Term 1",
        folder: "GENIUS_UKG term 1 MP4",
        videos: [
          "Just me.mp4","Lazy Camel.mp4","To Market To Market.mp4","Unwise Crocodile.mp4",
          "Page_6 .mp4","Page_7 , 8 , 9 , 10.mp4","Page_15.mp4","Page_16.mp4",
          "Page_18.mp4","Page_19.mp4","Page_21.mp4","Page_24.mp4","Page_25.mp4",
          "Page_27.mp4","Page_28.mp4","page_44.mp4","page_45.mp4","page_68.mp4",
          "Page_53 , 54 , 55 , 57 , 58 , 61 , 62 , 63 , 64 , 65.mp4",
          "Page_78.mp4","Page_80.mp4","Page_82.mp4","Page_84.mp4","Page_86.mp4",
          "Page_88.mp4","Page_94.mp4","Page_96.mp4","page_90.mp4","page_92.mp4","page_93.mp4"
        ],
      },
      {
        term: 2,
        label: "Term 2",
        folder: "Genius_UKG_Term_2_Mp4",
        videos: [
          "Page_29.mp4","Page_33.mp4","Page_39.mp4","Page_47.mp4","Page_48.mp4",
          "Page_51.mp4","Page_63, 64.mp4","Page_68.mp4","Page_70.mp4","Page_72.mp4",
          "Page_74.mp4","Page_78.mp4","Page_80.mp4","Page_100.mp4","Page_101.mp4",
          "Page_104.mp4","Page_108.mp4","Page_111.mp4","Page_115.mp4","Page_116.mp4",
          "Page_117.mp4","Page_123.mp4","Page_126.mp4","Page_128.mp4"
        ],
      },
      {
        term: 3,
        label: "Term 3",
        folder: "Genius_UKG_Term_3_Mp4",
        videos: [
          "Page_37.mp4","Page_39.mp4","Page_41.mp4","Page_43.mp4","Page_46.mp4",
          "Page_48.mp4","Page_50.mp4","Page_52.mp4","Page_56.mp4","Page_62 to 67.mp4",
          "Page_76.mp4","Page_80,81.mp4","Page_82_83.mp4","Page_94.mp4",
          "Page_105.mp4","Page_107.mp4","Page_110.mp4","Page_113.mp4","Page_115.mp4",
          "Page_118.mp4","Page_119.mp4","Page_134.mp4","Page_135.mp4","Page_136.mp4",
          "Page_137.mp4","Page_138.mp4","Page_139.mp4","Page_140.mp4","Page_144.mp4",
          "The lion and mouse new.mp4",
          "page_ 33.mp4","page_ 35.mp4","page_ 45.mp4","page_ 54.mp4","page_ 73.mp4",
          "page_ 86.mp4","page_ 111.mp4","page_ 112.mp4","page_ 116.mp4","page_ 117.mp4",
          "page_ 122.mp4","page_ 123.mp4","page_ 125.mp4","page_ 126.mp4",
          "page_124.mp4","page_127.mp4","page_128.mp4"
        ],
      },
    ],
  },
];

module.exports = catalog;
