import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar/Component";
import Component from "./components/NavigationBar/Component";
import CategoryFilter from "./components/CategoryFilter/Component";
import Card from "./components/Card/Component";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";

const data = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/20e3/0785/2b1112675b03df387de9f364cfb20e4f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVaKnSijxIvjop~xaZ3iIiCmij2AwS4KiGiu30GQdFkeYjTw3xogtFbA1MnCwQHx26YrDIb9MpMxJRsIFSlGVr~AcKjkukAYyV2PjLGkDVsR-0n5LmLHpJIJN4l-TVGJsNblacCi1c7oGe5OWHkfluSRAmBHQwUqqErDM-2G5BBpVNdUd~rbBAGdDtTUtXw9aE2ICCMDf~tCbYOdPP71s2O4F~dQVc2E790pf~-PfEMxvt~svvC1y0h5oBLBA1at~9~71RE7erzQvexAEOMOOtaVBhUciUs9wTAOmEmr51WYjDctjfzeQBLQZqK3xxK5z08JRjX1pGdYvHKxtm8Yrw__",
    text1: "Matte Powder Blush",
    text2: "1499",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8b7c/7f54/d22cee8ce5aecdbd4ecf4beb8f80e31c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=defDGiGE9f6fqRSmitIaOOcw~U95x8JokcdxYDfsmLsiTGZTGZltiiKUGfwKy3bHwPxtY8djwVeMRQZIzpDHjzTSyGwKWdNU-C77aGAVw5T2ZcwGJ~ZjbpkgFgsVkUE5dz5iDa8sv8-JyI-YMOE2uZyEEcXS92wDHE9kII-z1~JFnGgvFNc8sdNRqao0YWTCg9K2vS1KPSQC1QiPBsrfK4csCg4adbXWi1o8KKHTpoMzqXyR0d0~UD4VmflmMFiaOrm3FoP-34gvyg25-9d7ZAR6HDJUG5N40k1gaLhZOijiqF8v-RRY4J4Q~Oiqy6h0ThKhrfepuJEKsMZ0yUk8Dg__",
    text1: "Glam So Creme! Creamy Matte Lipstick",
    text2: "2100",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1a1e/fa51/4e4e2c69dd8f75efa9493ddde67d5846?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxpEDMj9ho9KWUTMihZPUylZ5dhQMjB8eOSSTfzwOBoBUojNhgwG~3JxK7ZfCuRd-aiwD1YpdBxlhM9n--gqlHQPPo-p9VQlrJwWNhAUNA4sz~STFQq0cDCqv5pA9S~ZW1gsZLViureGrjv4uZiHGHks62tpbMqQnLVrAnqA7aqQ5sc0E7vszLawvdRBoqbSkRUT5R2bm3hy4MTaH0LJdteE9uDtUQxTrAAjui8cioPnpJToiphi3yQy4bXuTcgPWfjUrg7~EsWaD43ANC5hmPU0ZXbCW8Wfh31EnXX0GQE1doAIAnpKU4yF8t7jqfVJSYdyN~1I55SO12tnjgYKAw__",
    text1: "Master Chrome Metallic Highlighter",
    text2: "1499",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3f35/3f9f/f56c3b6febf83ea60aabd96e651714dc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFAjBScDxF-cs7imXxpr8VFvybdH0a1ctpY-X~94w5tUu~nhtY4aRHFbJNzXlj4CDFRs7BfFnOphRwJmErJqoSmeWjqz2JCuJNVzmbfcuE3PoCAwwFgdDMR6uQslgzB-2W0pe-OtX4ljV5tLv94f52wN-wUsrY-yEnW6uSp2ZnhBiPJRthN98fsbOitEZOeIubuGheYa76Lgmt3hOJ8nIDTyGz4N7nwGmBGAATXWSCPCGblEf6SzUIL7CuhdTIT2louU3Kd5x7tD~2WNpE6yRvVWuubcqRbJdZ5L5V4LZrTOdApdIGZMFiRtmpG3avW6sk~LhZZwEM7pjwJ460J5gg__",
    text1: "Master Chrome Metallic Highlighter",
    text2: "2100",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9b4a/aa75/6d97123dac04101f2a0f969e80e11ab8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnyQD2B0Iltjk0FHKgjQpZwICKLHTPjgQUJ4VLwuyAYIbRblcJ5wOuuL-duxJaai5CGT40IRMCbKi~hVQMBk6QNo3VRCt2mw-dL51NpCtF4s40rAPDvnUsWiZ4Cpndv5cMhpyIbgeVgxA8F6fQ92Pd165dbN9wOQ7K9JnWoJQqC7VBSY9NSn6bCjLVUrReAXooudM3s3cWGjAIP~uP~uycNiq11h4sSeaA8pDx~bbvVPQSKWrI0cDHjL233soD5uf3jzVMyHN8xvtH7UsOoZ6ir938dEiE7OHGJsvUINXrHCIdI4JxAeTMBH9RJ8DZ4nEs5mo9--6judR1EMxB6Ubg__",
    text1: "Matte Powder Blush",
    text2: "1499",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ed1b/329b/04d33f532f16a04ab30e974409251f37?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CiH0rPeG7vAcLYk7eLFkdXYOL1pSa3oE7TzzyLtFDOiDokUu3-udf-UFg7KBMm91rquWvgg1W~r2CkjYGCzI5liaYO9tXb~H8a7W7tpirpXmtf2EE54q1PLthlOrn99gZwQRuO00AKtnMMM0GisfGS2DtCxeK~6AJVnQ09mteo1L3rje6xZZohJmdl2o5MUDTFYu5w2pNWOjhzr1jtswBt5zt6zfHNXz2LAdmiUEXqa5AB7pSzur5Si0AcbqlgXGzJssFynylSiNcVGfTHcXukCqb6wuXTWNcvcw3HH4elCMSvBsnWQJX0zfXMN5I6rO-OElR-jcIZd5XdiVb64VnA__",
    text1: "Glam So Creme! Creamy Matte Lipstick",
    text2: "2100",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/b730/7f0f/7906397a79eb13dbb8e3c267e125a974?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qq5zDOb-trbO23vb0fLOHZrkywj4ueOK5mlTH-GGI8b7UvQXPKGEaoYPQLmjYtRYnxscE5TXgnR89uQpf9Mh0WdJKRsiwoUCjMgYg3OZ8vt1nQh4iBOlKzJ7WBzyeusQYRKIZgkwHAJo5yXTKDaxqvf7B9mdMgVJ3bpkknI4Gt3cmWBerXQlB2pgmnI-EAPEqCPulmCidb4qT0T1tx~sDIBmVX3LeF3cQUQ9gql0rqCq0IuGrwsVmRTpSCMBb5cMcytZfblfZdPuY7EOR9QDER8J7U5tLNFFtaZRkSNpbAnQDSVVezI0wSOs1u-Z~jT6JbbqhnkmX5YvaLhKDec2Ng__",
    text1: "Soft Matte Foundation",
    text2: "1499",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/21d2/2443/7e8598fd007eb7463fc5fc863e5fb16b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLG7L7sonL9CUMTP5W5RsDnolXA35Ywh0FUzBfqUSKltljnf8HxI6nFlXchY-wCX8DBwBnLBuoH-oVFigyBeGWt7-VBmFOClO5wa0uFwsO2quW6UgtBzm1Q4yOWQUUH0xivuZEJIW5tySqNrkenvyKON7FNfasIg7ziOxxYFeNtVT0Wu3tXWCOpvuwjBi0oVI1kRljrIOf-xjI1pjDBNCiG~AmIe~iSvr296zNurd4NCVT48WSQBWMah5eCtWwrZ6CI04QMU8T8Qcz0ecIKh4Xhc~LjvIyHrK0izpyrfR5MnPtDCFJ~Sm1tcXif6MdN2g5qWySPNCByW~UQ9T5BCew__",
    text1: "Master Chrome Metallic Highlighter",
    text2: "2100",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/2269/2a76/342f671e96b17c396d5b073f1c6b316f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWgvUXeSpP6fR1VI8oW5RuRxOeEhxwXvRefECkPNpYCJ7t7XC-jMG9De0BwUVJTPu-6ByGg6Gkf7mBtS~Nj3dl78rAPP7zWZpLEVtPnjxV03kSEBMKg-GtoNavWSGKrjpv8X722MZdbSY3bURq0jyMK1xWsTZgL7YkKnE888aq~m6~WvtjLac1KftgFiIssPmJ2A8tsJg2fVYKDmLO~6sYYyVRftEEuT6zj~ljL8CITlunMQqwB7hFD0-9FKOEYCwjD2SAbPvGc8R5cFfE1StgNuRaokxwMFQEHIxYt4DTF~Gdf7Ot9Y45TzMStYJAiDryq8BCYP7FtZ0woKL25LoQ__",
    text1: "Matte Powder Blush",
    text2: "1499",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/6062/a645/f749d4342548d685417b0c8dc9b615b3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LljR-hM3zHu89zTkNuhsDSNHmMYE0wypwX5yhLJKGgB0r1vjiNSCrLljL4uz1LQU2LxOwWfLVo7ila5uBrhtVt6k9p3NecrDgcxu5HKHUSQBLk~cti9MJMbIXKnP3ctXjZbqtA8F3Nu3BRypBYt-1qnIGC8tOIjB1bZ75saVoXA6DcdoR2uMN1Uhd4aSLIs19CuwZ3HMMduhYvFlEPQvUCPCns3liTtR-dU~rmBJmqvKQ15pzpEVG5htrPH5SihBMWVRoVrA0voWTZrOW5tg1HAFNJ6E-~fhA9i4WHclvzGH2DkWHgqHwAASmAmCCnzce919m3WI-FaCcfVW8e3RkQ__",
    text1: "Glam So Creme! Creamy Matte Lipstick",
    text2: "2100",
  },
];

export default function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Component />
      <CategoryFilter />
      <div className="grid xl:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-x-[45px] gap-y-[55px] mb-10">
        {Array(10)
          .fill()
          .map((_, i) => (
            <Card
              key={i}
              image1={data[i].image}
              text1={data[i].text1}
              text2={data[i].text2}
            />
          ))}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
