import { Header, Footer } from "../component";
import "./mystyles.css";
import { Card } from "../component/Card";

export const Definition = () => {
  return (
    <div>
      <div
        style={{ background: "#1f1f47", height: "100vh" }}
        className="d-flex flex-column  align-items-center "
      >
        <Header></Header>
        <div style={{ overflow: "scroll" }}>
          <Card
            title="Механик"
            subtitle=""
            content={
              <div>
                Механик - механик хөдөлгөөнийг судалдаг физикийн салбар <br />
                Механик хөдөлгөөн- биеүд болон тэдгээрийн бүрэлдэхүүн хэсгүүдийн
                огторгуй дахь харилцаг байршил хугацааны явцад өөрчлөгдөх
                үзэгдэл. <br /> Механик нь гурван хэсгээс тогтоно: класик
                механик, харьцангуй механик, квант механик
              </div>
            }
            contenttwo={<div></div>}
          ></Card>
          <Card
            title="Динамик"
            subtitle=""
            content={
              <div>
                Динамик - бие бусад биетэй харилцан үйлчлэх үйлчлэлийг тооцон
                хөдөлгөөний хуулийг тогтоодог механикийн салбар
              </div>
            }
            contenttwo={
              <div>
                <div>
                  {" "}
                  Ньютоны нэгдүүгээр хууль: Хэрэв биед хүч үйлчлэхгүй бол бие
                  хурдаа хадгалдаг тооллын инерциал систем олдоно. Тооллын
                  инерциал системтэй харьцангуй шулуун жигд хөдөлдөг, эсвэл
                  тайван байгаа тооллын системүүд бүгд инерциал тооллын систем
                  болно. Нарны төвтэй холбоотой тооллын системийг их өндөр
                  нарийвчлалтайгаар инерциаль тооллын систем гэж тооцож болно.
                  Дэлхийн төвтэй холбоотой тооллын системийг дэлхий тэнхлэгээ
                  болон нарыг тойрон эргэх хөдөлгөөнийг тооцохгүй нөхцөлд
                  инерциаль систем гэж үзнэ. Галилейн харьцангуйн зарчим.
                  Тооллын инерциал системд бүх механик үзэгдлүүд ижил анхны
                  нөхцөлтэй үед ижил явагдана.
                </div>
                <div> </div>
              </div>
            }
          ></Card>
          <Card
            title=""
            subtitle=""
            content={<div></div>}
            contenttwo={<div></div>}
          ></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

{
  /* <Card title="" subtitle="" content={<div></div>}></Card> */
}
{
  /* <div style={{ width: "75vw", color: "white" }}>
        
        <div className="Dynamics" style={{ width: "75vw", color: "white" }}>
          
          
          <li>
            Гурав дахь хууль: хэрэв бие A нь биед хүч үзүүлдэг B, дараа нь бие B
            нь биед тэнцүү боловч эсрэг хүч үйлчилнэ А үйлдэл-урвалын хос үүсгэх
          </li>
          <div>Хүч</div>
        </div> */
}
