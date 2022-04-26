import Link from"next/link";import{useState,useEffect}from"react";import{Icon,Image,Dropdown,Menu}from"semantic-ui-react";import{useContext}from"react";import{AuthContext}from"../contexts/AuthProvider";import{setLogout}from"../middleware/utils";
export default function NaviBar() {
const[imageDisplayOn,setImageDisplayOn]=useState(!1),{status:status,user:user}=useContext(AuthContext),[menuBarStatu,setMenuBarStatu]=useState(!1),[mobileFutbol,setMobileFutbol]=useState(!1),[mobileBasket,setMobileBasket]=useState(!1),[mobileErkekBasket,setMobileErkekBasket]=useState(!1),[mobileKadinBasket,setMobileKadinBasket]=useState(!1),[mobileVoleybol,setMobileVoleybol]=useState(!1),[mobileErkekVoleybol,setMobileErkekVoleybol]=useState(!1),[mobileKadinVoleybol,setMobileKadinVoleybol]=useState(!1),[openMenu,setOpenMenu]=useState(!1);
  const basketbolTrigger = (
    <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:-translate-y-4 hover:-translate-y-4">
      <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
        Basketbol
      </span>
    </button>
  );
const basketbolMobileHandler=()=>{mobileBasket?setMobileBasket(!1):setMobileBasket(!0)};
  const voleybolTrigger = (
      <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:translate-y-4 hover:translate-y-4">
        <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
          Voleybol
        </span>
      </button>
    ),
    futbolTrigger = (
      <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:translate-y-4 hover:translate-y-4">
        <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
          Futbol
        </span>
      </button>
    );
 const voleybolMobileHandler=()=>{mobileVoleybol?setMobileVoleybol(!1):setMobileVoleybol(!0)};useEffect(()=>{const resizeHandler=()=>{window.innerWidth<=1100&&"undefined"!=typeof window?setMenuBarStatu(!0):setMenuBarStatu(!1)};return window.addEventListener("resize",resizeHandler),resizeHandler(),()=>{window.removeEventListener("resize",resizeHandler)}},[]),useEffect(()=>{let len;void 0===user.userDetails.profile?setImageDisplayOn(!1):setImageDisplayOn(!0)},[user]);
  return (
    <header className="sticky top-0 z-50 py-0">
      <div className="bg-blue h-20 py-0 px-0">
        <div className=" h-full">
          <div id="navi-computer" className="h-full">
            <div className="p-0 h-full bg-blue">
              <Menu
                className="h-full space-x-2"
                style={{ backgroundColor: "#12326e", border: 0 }}
              >
                <Menu.Item>
				  <h1>
                 	 <Link href="https://kanaryasokagi.com/">
                   		 <div className="text-center">
                    	  <Image alt="kanaryasokağı-logo" src="/kanaryasokagi.png" className="h-8" />                   
                    	</div>
                 	 </Link>
 				  </h1>
                </Menu.Item>
                <Menu.Item position="right" fitted>
                  <Link href="https://kanaryasokagi.com/">
                    <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:-translate-y-4 hover:-translate-y-4">
                      <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                        Anasayfa
                      </span>
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item fitted>
                  <Dropdown
                    trigger={futbolTrigger}
                    icon={null}
                    className="h-full"
                  >
                    <Dropdown.Menu className="w-full bg-blue">
                      <Link href="http://kanaryasokagi.com/futbol/">
                        <Dropdown.Item className="bg-yellow">
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Haberler
                          </span>
                        </Dropdown.Item>
                      </Link>
                      <Link href="https://kanaryasokagi.com/puan-durumu/futbol/">
                        <Dropdown.Item>
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Puan Durumu
                          </span>
                        </Dropdown.Item>
                      </Link>
                      <Link href="https://kanaryasokagi.com/fikstur/futbol/">
                        <Dropdown.Item>
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Fikstur
                          </span>
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item fitted>
                  <Dropdown
                    trigger={basketbolTrigger}
                    icon={null}
                    className="h-full"
                  >
                    <Dropdown.Menu className="w-full">
                      <Link href="https://kanaryasokagi.com/basketbol/">
                        <Dropdown.Item>
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Haberler
                          </span>
                        </Dropdown.Item>
                      </Link>
                      <Dropdown.Item>
                        <Dropdown
                          icon={null}
                          text="Erkek"
                          className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue"
                        >
                          <Dropdown.Menu>
                            <Link href="https://kanaryasokagi.com/basketbol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Haberler
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/puan-durumu/basketbol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Puan Durumu
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/fikstur/basketbol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Fikstur
                                </span>
                              </Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                      <Dropdown.Item className="bg-yellow">
                        <Dropdown
                          icon={null}
                          text="Kadın"
                          className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue"
                        >
                          <Dropdown.Menu>
                            <Link href="https://kanaryasokagi.com/basketbol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Haberler
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/puan-durumu/basketbol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Puan Durumu
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/fikstur/basketbol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Fikstur
                                </span>
                              </Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item fitted>
                  <Dropdown
                    trigger={voleybolTrigger}
                    icon={null}
                    className="h-full"
                  >
                    <Dropdown.Menu className="w-full">
                      <Link href="https://kanaryasokagi.com/voleybol/">
                        <Dropdown.Item>
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Haberler
                          </span>
                        </Dropdown.Item>
                      </Link>
                      <Dropdown.Item className="bg-yellow">
                        <Dropdown
                          icon={null}
                          text="Erkek"
                          className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue"
                        >
                          <Dropdown.Menu>
                            <Link href="https://kanaryasokagi.com/voleybol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Haberler
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/puan-durumu/voleybol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Puan Durumu
                                </span>
                              </Dropdown.Item>
                            </Link>

                            <Link href="https://kanaryasokagi.com/fikstur/voleybol/erkek">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Fikstur
                                </span>
                              </Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                      <Dropdown.Item className="bg-yellow">
                        <Dropdown
                          icon={null}
                          text="Kadın"
                          className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue"
                        >
                          <Dropdown.Menu>
                            <Link href="https://kanaryasokagi.com/voleybol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Haberler
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/puan-durumu/voleybol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Puan Durumu
                                </span>
                              </Dropdown.Item>
                            </Link>
                            <Link href="https://kanaryasokagi.com/fikstur/voleybol/kadin">
                              <Dropdown.Item>
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                                  Fikstur
                                </span>
                              </Dropdown.Item>
                            </Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                {status.loggedIn ? (
                  <>
                    <Menu.Item fitted>
                      <Link href="https://kanaryasokagi.com/giris">
                        <div className="space-x-2 w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:-translate-y-4 hover:-translate-y-4 flex justify-center items-center">
                          <div className="space-y-1">
                            <div className="relative flex justify-center">
                              {imageDisplayOn && (
                                <Image
                                  src={user.userDetails.profile}
                                  alt="kullaniciResmi"
                                  avatar
                                  className="object-cover rounded-full"
                                />
                              )}
                            </div>
                            <div
                              style={{ height: ".05rem" }}
                              className="bg-blue"
                            />
                            <div className="font-poppins text-tiny">
                              {user.userDetails.username}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Menu.Item>

                    <Menu.Item fitted style={{ paddingRight: 4 }}>
                      <button
                        className="w-20 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:translate-y-4 hover:translate-y-4"
                        onClick={(e) => [
                          status.setLoggedIn(false),
                          setLogout(e),
                          user.setUserDetails({
                            id: "",
                            email: "",
                            username: "",
                            firstname: "",
                            lastname: "",
                            roleId: "",
                            profile: "",
                          }),
                        ]}
                      >
                        <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                          Çıkış
                        </span>
                      </button>
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item fitted>
                      <Link href="https://kanaryasokagi.com/giris">
                        <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:-translate-y-4 hover:-translate-y-4">
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Giriş
                          </span>
                        </button>
                      </Link>
                    </Menu.Item>
                    <Menu.Item fitted style={{ paddingRight: 4 }}>
                      <Link href="https://kanaryasokagi.com/kayit">
                        <button className="w-24 h-full transition-transform duration-300 ease-in-out bg-yellow hover:bg-white transform hover:translate-y-4 hover:translate-y-4">
                          <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-lg hover:text-blue">
                            Kayıt
                          </span>
                        </button>
                      </Link>
                    </Menu.Item>
                  </>
                )}
              </Menu>
            </div>
          </div>
          <div id="navi-mobile" className="h-full">
            <div className="h-full">
              <Menu
                className="h-full"
                style={{ backgroundColor: "#12326e", border: 0 }}
              >
                <Menu.Item header>
					<h1>
					<Link href="https://kanaryasokagi.com/">
                  <Image alt="kanaryasokağı-logo" src="/kanaryasokagi.png" className="h-6" />
					  </Link>
					  </h1>
                </Menu.Item>

                <Menu.Item position="right">
                  <button
                    className="text-white h-full"
                    onClick={() => {
                      var x = document.getElementById("menu");
                      if (x.classList.contains("hide")) {
                        x.classList.remove("hide");
                      } else {
                        x.classList.add("hide");
                      }
                    }}
                  >
                    <Icon name="bars" />
                  </button>
                </Menu.Item>
              </Menu>

              <div id="menu" className="h-full fixed bg-blue z-1 top-0 left-0 border-r-2 border-white">
                <Menu
                  vertical
                  fluid
                  style={{ backgroundColor: "#12326e", border: 0 }}
                >
                  <Menu.Item header>
					  <Link href="https://kanaryasokagi.com">
                    <Image src="/kanaryasokagi.png" className="w-4/6 mx-auto mt-10" />
						</Link>
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                    }}
                  >
                    <Link href="https://kanaryasokagi.com/">
                      <button className="w-full h-14 bg-white mt-10">
                        <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                          Anasayfa
                        </span>
                      </button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="space-y-2">
                      <div>
                        <button
                          className="w-full h-14 bg-white"
                          onClick={() => {
                            var x = document.getElementById("mobileButton");
                            if (x.classList.contains("hide")) {
                              x.classList.remove("hide");
                            } else {
                              x.classList.add("hide");
                            }
                          }}
                        >
                          <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                            Futbol
                          </span>
                        </button>
                      </div>
                      <div id="mobileButton" className="space-y-2">
                        <div>
                          <div>
                            <Link href="https://kanaryasokagi.com/futbol/">
                              <button className="w-full h-12 bg-yellow">
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny">
                                  Haberler
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div>
                            <Link href="https://kanaryasokagi.com/puan-durumu/futbol">
                              <button className="w-full h-12 bg-yellow">
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                  Puan Durumu
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div>
                            <Link href="https://kanaryasokagi.com/fikstur/futbol">
                              <button className="w-full h-12 bg-yellow">
                                <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                  Fikstur
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Menu.Item>
                  <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="space-y-2">
                      <button
                        className="w-full h-14 bg-white"
                        onClick={() => {
                          var x = document.getElementById("mobileButton2");
                          if (x.classList.contains("hide")) {
                            x.classList.remove("hide");
                          } else {
                            x.classList.add("hide");
                          }
                        }}
                      >
                        <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                          Basketbol
                        </span>
                      </button>
                      <div id="mobileButton2" className="space-y-2">
                        <div>
                          <button
                            className="w-full h-12 bg-yellow"
                            onClick={() =>
                              setMobileErkekBasket(!mobileErkekBasket)
                            }
                          >
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              Erkek
                            </span>
                          </button>
                        </div>
                        {mobileErkekBasket && (
                          <div className="space-y-2">
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/basketbol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny">
                                      Haberler
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/puan-durumu/basketbol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Puan Durumu
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/fikstur/basketbol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Fikstur
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                        <div>
                          <button
                            className="w-full h-12 bg-yellow"
                            onClick={() =>
                              setMobileKadinBasket(!mobileKadinBasket)
                            }
                          >
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              Kadın
                            </span>
                          </button>
                        </div>
                        {mobileKadinBasket && (
                          <div className="space-y-2">
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/basketbol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny">
                                      Haberler
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/puan-durumu/basketbol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Puan Durumu
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/fikstur/basketbol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Fikstur
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Menu.Item>
                  <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="space-y-2">
                      <div>
                        <button
                          className="w-full h-14 bg-white"
                          onClick={() => {
                            var x = document.getElementById("mobileButton3");
                            if (x.classList.contains("hide")) {
                              x.classList.remove("hide");
                            } else {
                              x.classList.add("hide");
                            }
                          }}
                        >
                          <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                            Voleybol
                          </span>
                        </button>
                      </div>

                      <div id="mobileButton3" className="space-y-2">
                        <div>
                          <button
                            className="w-full h-12 bg-yellow"
                            onClick={() =>
                              setMobileErkekVoleybol(!mobileErkekVoleybol)
                            }
                          >
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny hover:text-blue">
                              Erkek
                            </span>
                          </button>
                        </div>
                        {mobileErkekVoleybol && (
                          <div className="space-y-2">
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/voleybol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny">
                                      Haberler
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/puan-durumu/voleybol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Puan Durumu
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/fikstur/voleybol/erkek">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Fikstur
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                        <div>
                          <button
                            className="w-full h-12 bg-yellow"
                            onClick={() =>
                              setMobileKadinVoleybol(!mobileKadinVoleybol)
                            }
                          >
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              Kadın
                            </span>
                          </button>
                        </div>
                        {mobileKadinVoleybol && (
                          <div className="space-y-2">
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/voleybol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny">
                                      Haberler
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/puan-durumu/voleybol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Puan Durumu
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div>
                              <div>
                                <Link href="https://kanaryasokagi.com/fikstur/voleybol/kadin">
                                  <button className="w-full h-10 bg-white">
                                    <span className="no-underline text-blue px-2 font-poppins font-thin tracking-tighter text-tiny hover:text-blue">
                                      Fikstur
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Menu.Item>
                  {status.loggedIn ? (
                    <>
                      <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Link href="https://kanaryasokagi.com/giris">
                          <div className="space-x-2 w-full h-20 bg-white flex justify-center items-center cursor-pointer">
                            <div className="divide-x space-x-2 divide-blue flex items-center">
                              <div className="inline-block">
                                {imageDisplayOn && (
                                  <Image
                                    alt="kullaniciResmi"
                                    src={user.userDetails.profile}
                                    avatar
                                    className="object-cover rounded-full"
                                  />
                                )}
                              </div>
                              <div className="font-poppins font-bold text-blue inline-block p-2">
                                {user.userDetails.username}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Menu.Item>
                      <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <button
                          className="w-full h-14 bg-white"
                          onClick={(e) => [
                            status.setLoggedIn(false),
                            setLogout(e),
                            user.setUserDetails({
                              id: "",
                              email: "",
                              username: "",
                              firstname: "",
                              lastname: "",
                              roleId: "",
                              profile: "",
                            }),
                          ]}
                        >
                          <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                            Çıkış
                          </span>
                        </button>
                      </Menu.Item>
                    </>
                  ) : (
                    <div>
                      <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Link href="https://kanaryasokagi.com/giris">
                          <button className="w-full h-14 bg-white">
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              Giriş
                            </span>
                          </button>
                        </Link>
                      </Menu.Item>
                      <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Link href="/kayit">
                          <button className="w-full h-14 bg-white">
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              Kayıt
                            </span>
                          </button>
                        </Link>
                      </Menu.Item>
                      <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Link href="/iletisim">
                          <button className="w-full h-14 bg-white">
                            <span className="no-underline text-blue px-2 font-poppins font-bold tracking-tighter text-tiny">
                              İletişim
                            </span>
                          </button>
                        </Link>
                      </Menu.Item>
                    </div>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
