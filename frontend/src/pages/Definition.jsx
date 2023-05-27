import { Header, Footer } from "../component";
import "./mystyles.css";

export const Definition = () => {
  return (
    <div>
      <div
        style={{ background: "#1f1f47" }}
        className="d-flex flex-column  align-items-center "
      >
        <div className="stickyheader">
          <Header></Header>
        </div>

        <div
          className="App"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "80px",
            width: "100vw",

            color: "white",
          }}
        >
          <div
            style={{
              width: "60vw",
              height: "35vh",
              // backgroundColor: "#222222",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Кинематик
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Кинематикийн ойлголтууд
              </div>
              <div>
                <ul style={{ listStyleType: "circle", fontSize: "23px" }}>
                  <li>Зай: нийт урт нь чиглэлээс үл хамааран хөдөлсөн</li>
                  <li>
                    Нүүлгэн шилжүүлэлт: тодорхой чиглэлд хамгийн богино зай
                  </li>
                  <li>Coca Cola</li>
                  <li>Хурд: нэгж хугацаанд туулсан зам, чиглэлгүй</li>
                  <li>Хурд: нүүлгэн шилжүүлэлтийн өөрчлөлтийн хурд</li>
                  <li>Хурдатгал: хурдны өөрчлөлтийн хурд</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "60vw",
              height: "35vh",
              // backgroundColor: "#222222",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Кинематик тэгшитгэл
              </div>
              <div
                style={{
                  fontSize: "23px",
                }}
              >
                <p>s = ut + at²/2</p>
                <p>v = u + at</p>
                <p>v² = u² + 2as</p>
                <p>s = (v₁ + v₂)/2 × t</p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "60vw",
              height: "50vh",
              // backgroundColor: "#222222",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Linear Motion
              </div>
              <div>
                <ul style={{ listStyleType: "circle", fontSize: "23px" }}>
                  <li>Зай: нийт урт нь чиглэлээс үл хамааран хөдөлсөн</li>
                  <li>
                    Нүүлгэн шилжүүлэлт: тодорхой чиглэлд хамгийн богино зай
                  </li>
                  <li>Coca Cola</li>
                  <li>Хурд: нэгж хугацаанд туулсан зам, чиглэлгүй</li>
                  <li>Хурд: нүүлгэн шилжүүлэлтийн өөрчлөлтийн хурд</li>
                  <li>Хурдатгал: хурдны өөрчлөлтийн хурд</li>
                  <li>Шилжилтийн хугацааны график:</li>
                </ul>
                <p style={{ fontSize: "20px", marginLeft: "60px" }}>
                  Градиент = хурд
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ backgroundColor: "white" }}
                src="https://znotes-static.s3.amazonaws.com/cie/as/physics-9702/635f9f2fc90bdc119bfc52cf374f275e2d6db6abe453bfce.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[60vw] h-[50vh] flex items-center ">
            <div className="ml-[50px] w-[60vw]">
              <div className="text-[30px] font-bold">Шугаман бус хөдөлгөөн</div>
              <div>
                <p className="font-bold text-[23px]">
                  Хурд-цаг хугацааны график:
                </p>
                <ul style={{ listStyleType: "circle", fontSize: "23px" }}>
                  <li>Градиент = хурдатгал</li>
                  <li>График доорх талбай = шилжилтийн өөрчлөлт</li>
                </ul>
                <div className="flex justify-center">
                  <img
                    className="w-100 h-100 bg-white"
                    src="https://znotes-static.s3.ap-southeast-1.amazonaws.com/cie/as/physics-9702/635f9f73c90bdc119bfc52d0fdabff47bd0553ed2e739250.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[23px]">
                <p>
                  Нэг төрлийн хурдатгал ба шулуун шугамын хөдөлгөөний тэгшитгэл:
                </p>
                <p>v = u + at</p>
                <p>s = ut + at²/2 = vt - at²/2</p>
                <p>s = (u + v)tv²/2 = u² + 2as</p>
                <ul className=" list-[circle]">
                  <li>Чөлөөт уналтын хурдатгал = 9.81ms-2</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[60vw] h-[110vh] flex items-center ">
            <div>
              <div className="text-[30px] font-bold">
                Чөлөөт унаж буй биетүүдийн хөдөлгөөн
              </div>
              <div>
                <div className="flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw] flex items-center justify-center ">
                    Нүүлгэн шилжүүлэлт
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw] flex items-center justify-center">
                    Хурдлах тусам муруйгаа үргэлжлүүлнэ
                  </div>
                  <div className="border-[0.5px] border-[#323232]">
                    <img
                      className="w-[15vw] bg-white"
                      src="https://znotes-static.s3.amazonaws.com/cie/as/physics-9702/bLcAc6CmqFYE8M2hCimage.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]">
                    График терминалын хурдад хүрэх үед түвшин буурдаг
                  </div>
                  <div className="border-[0.5px] border-[#323232] w-[15vw]"></div>
                </div>
                <div className=" flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw] flex items-center justify-center">
                    Хурд
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw] flex items-center justify-center">
                    Үргэлжлүүлэн хурдасгасаар байна
                  </div>
                  <div className="border-[0.5px] border-[#323232]">
                    <img
                      className="w-[15vw] bg-white"
                      src="https://znotes-static.s3.ap-southeast-1.amazonaws.com/cie/as/physics-9702/bLcAc6CmqFYE8M2hCimage012.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]">
                    График нь удааширч, төгсгөлийн хурд хүртэл тэгшлэх үед муруй
                    болно
                  </div>
                  <div className="border-[0.5px] border-[#323232] w-[15vw]"></div>
                </div>
                <div className="flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]">
                    Хурдатгал
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]">
                    Шулуун шугам
                  </div>
                  <div className="border-[0.5px] border-[#323232] w-[15vw]"></div>
                </div>
                <div className="flex flex-row">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[22.5vw] flex items-center justify-center">
                    Үүссэн хүч нь тэгтэй тэнцүү тул график муруй тэг хүртэл
                    буурдаг
                  </div>
                  <div className="border-[0.5px] border-[#323232] w-[15vw]">
                    <img
                      className="w-[15vw] bg-white"
                      src="https://znotes-static.s3.amazonaws.com/cie/as/physics-9702/bLcAc6CmqFYE8M2hCimage013.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60vw] h-[60vh] flex items-center ">
            <div className="ml-[50px]">
              <div className="text-[30px] font-bold">
                Чөлөөт уналтын хурдатгалыг тодорхойлох
              </div>
              <ul className="text-[23px] list-[circle]">
                <li>Ган бөмбөгийг цахилгаан соронзон дээр барьдаг.</li>
                <li>
                  Цахилгаан соронзон унтарсан үед бөмбөг гэрлийн туяаг тасалж,
                  таймер ажиллаж эхлэв.
                </li>
                <li>
                  Бөмбөг унах үед хоёр дахь гэрлийн туяа тасарч, таймер зогсоно
                </li>
                <li>Босоо зай h эсрэг хуйвалдаан хийж байна t²</li>
              </ul>
              <div className=" flex justify-center">
                <img
                  className="w-[15vw]"
                  src="https://images.znotes.org/cie/as/physics-9702/image010.png"
                  alt=""
                />
              </div>
              <div className="text-[23px]">
                s = ut + tm²/2 болон u=0;s=at²/2 өөрөөр хэлбэл h = gt²/2
              </div>
            </div>
          </div>
          <div className="w-[60vw] h-[80vh] flex items-center ">
            <div className="ml-[50px]">
              <div className="text-[30px] font-bold">Харвах хөдөлгөөн</div>
              <ul className="list-[circle] text-[23px]">
                <li>
                  Харвах хөдөлгөөн: нэг чиглэлд жигд хурд, перпендикуляр чиглэлд
                  тогтмол хурдатгал <br />
                  <div className="flex justify-center">
                    <img
                      className="w-[20vw]"
                      src="https://images.znotes.org/cie/as/physics-9702/image014.png"
                      alt=""
                    />
                  </div>
                </li>
                <li>Хэвтээ хөдөлгөөн = тогтмол хурд (харваа шидэгдэх хурд)</li>
                <li>
                  Босоо хөдөлгөөн = тогтмол хурдатгал (биеийн жингийн шалтгаан,
                  тогтмол чөлөөт уналтын хурдатгал)
                </li>
                <li>
                  Муруй зам - параболик (y ∝ x²) <br />{" "}
                  <div className="flex justify-center">
                    <img
                      className="w-[20vw]"
                      src="https://images.znotes.org/cie/as/physics-9702/image015.png"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
              <div>
                <div className="flex flex-row justify-center">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Хурдны бүрэлдэхүүн хэсэг
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]"></div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Хэвтээ
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Босоо
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Агаарын эсэргүүцэлгүй
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Тогтмол
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Тогтмол хурдаар нэмэгддэг
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Агаарын эсэргүүцэлтэй
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Тэг болж буурна{" "}
                  </div>
                  <div className="border-[0.5px] border-[#323232] text-[23px] w-[10vw]">
                    Тогтмол утга хүртэл нэмэгддэг
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60vw] h-[35vh] flex items-center ">
            <div className="ml-[50px] w-[60vw]">
              <div className="text-[30px] font-bold">
                Шүхрээр шумбагчийн хөдөлгөөн
              </div>
              <div className="flex justify-center">
                <img
                  className="w-[25vw] bg-[white]"
                  src="https://images.znotes.org/cie/as/physics-9702/image016.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
