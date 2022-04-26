import React,{useState,useEffect}from"react";import Head from "next/head"; import Link from"next/link";import Router from"next/router";import Cookies from"js-cookie";import{Checkbox, Form}from"semantic-ui-react";import{absoluteUrl,getAppCookies,verifyToken,setLogout}from"../middleware/utils";import{useContext}from"react";import{AuthContext}from"../contexts/AuthProvider";import Layout from"../components/layout";const emailRegEx=/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,FORM_DATA_LOGIN={email:{value:"",label:"Email",min:10,max:36,required:!0,validator:{regEx:emailRegEx,error:"Please insert valid email"}},password:{value:"",label:"Password",min:4,max:36,required:!0}};
export default function Giris(props) {
const{status:status,user:user}=useContext(AuthContext),{baseApiUrl:baseApiUrl,profile:profile}=props,[stateFormData,setStateFormData]=useState(FORM_DATA_LOGIN),[stateFormError,setStateFormError]=useState([]),[stateFormValid,setStateFormValid]=useState(!1),[loading,setLoading]=useState(!1),[stateFormMessage,setStateFormMessage]=useState({});function onChangeHandler(e){const{name:name,value:value}=e.currentTarget;setStateFormData({...stateFormData,[name]:{...stateFormData[name],value:value}})}async function onSubmitHandler(e){e.preventDefault();let data={...stateFormData};data={...data,email:data.email.value||""},data={...data,password:data.password.value||""},setLoading(!loading);const loginApi=await fetch("/api/auth/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result=await loginApi.json();result.success&&result.token?(Cookies.set("token",result.token),user.setUserDetails({email:data.email}),status.setLoggedIn(!0),Router.push("/")):setStateFormMessage(result),setLoading(!1)}catch(err){console.log(err)}}function handleOnClickLogout(e){user.setUserDetails({email:""}),status.setLoggedIn(!1),setLogout(e)}useEffect(()=>{profile&&Router.push("/profil")},[profile]);const[stateSifreGoster,setStateSifreGoster]=useState(!1);
 return (
    <Layout>
	   <Head>
	  <title>
          Giriş Yap! - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Giriş Yap! - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!"
        />
        <meta
          name="description"
          content=" Giriş Yap! - Kanaryasokağı - Fenerbahçeye dair en güncel, en hızlı haberler! Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
        />
        <meta
          name="keywords"
          content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, fenerbahçe opet"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link rel="canonical" href="https://kanaryasokagi.com/giris" />
      </Head>
      <div className="h-screen flex flex-wrap justify-center items-center">
        <main>
          {!profile && (
            <div>
              <div>
                <h2 className="text-center">Giriş Yap</h2>
                <Form
                  className="space-y-10 font-poppins"
                  onSubmit={onSubmitHandler}
                >
                  <div className="text-center">
                    <hr />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Örn: asd@asd.com"
                      onChange={onChangeHandler}
                      value={stateFormData.email.value}
                    />
                    {stateFormError.email && (
                      <span className="warning">
                        {stateFormError.email.hint}
                      </span>
                    )}
                  </div>
                  {!stateSifreGoster ? (   <div>
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Örn: 1234"
                      onChange={onChangeHandler}
                      value={stateFormData.password.value}
                    />
                    {stateFormError.password && (
                      <span className="warning">
                        {stateFormError.password.hint}
                      </span>
                    )}
                  </div>) : (   <div>
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Örn: 1234"
                      onChange={onChangeHandler}
                      value={stateFormData.password.value}
                    />
                    {stateFormError.password && (
                      <span className="warning">
                        {stateFormError.password.hint}
                      </span>
                    )}
                  </div>)}
               
                  <div>
                  <Checkbox
                      className="font-poppins"
                      onChange={() => {
                        setStateSifreGoster(!stateSifreGoster);
                      }}
                      label="Şifreyi göster"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="ui button w-full"
                      style={{ backgroundColor: "#12326e" }}
                    >
                      <span className="font-poppins text-yellow">Giriş</span>
                    </button>
                  </div>
                  <div>
                    <span>
                      Üye değil misiniz?{" "}
                      <Link
                        href={{ pathname: "https://kanaryasokagi.com/kayit" }}
                      >
                        <a className="text-blue">
                        Üye ol
                        </a>
                      </Link>
                    </span>
                  </div>
                  {!stateFormMessage.success && (
                    <h4 className="warning text-center">
                      {stateFormMessage.message}
                    </h4>
                  )}
                </Form>
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const{req:req}=context,{origin:origin}=absoluteUrl(req),baseApiUrl="/api",{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  return { props: { baseApiUrl: baseApiUrl, profile: profile } };
}
