import React,{useState,useEffect}from"react";import Head from"next/head";import Router from"next/router";import{Checkbox,Form,Message}from"semantic-ui-react";import{absoluteUrl,getAppCookies,verifyToken}from"../middleware/utils";import{useContext}from"react";import{AuthContext}from"../contexts/AuthProvider";import Layout from"../components/layout";const emailRegEx=/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,FORM_DATA_LOGIN={email:{value:"",label:"Email",min:10,max:36,required:!0,validator:{regEx:emailRegEx,error:"Geçerli bir mail giriniz."}},userName:{value:"",label:"Kullanıcı adı",min:5,max:20,required:!0},firstName:{value:"",label:"İsim",min:3,max:20,required:!0},lastName:{value:"",label:"Soyisim",min:3,max:30,required:!0},password:{value:"",label:"Şifre",min:4,max:36,required:!0,validator:{error:"Şifreler eşleşmedi"}},passwordRep:{value:"",label:"Şifre tekrarı",min:4,max:36,required:!0,validator:{error:"Şifreler eşleşmedi"}}};
export default function Kayit(props) {
  const{status:status,user:user}=useContext(AuthContext),{baseApiUrl:baseApiUrl,profile:profile}=props,[stateFormData,setStateFormData]=useState(FORM_DATA_LOGIN),[stateFormError,setStateFormError]=useState([]),[stateFormValid,setStateFormValid]=useState(!1),[stateFormMessage,setStateFormMessage]=useState({success:!0,message:""}),[loading,setLoading]=useState(!1);function onChangeHandler(e){const{name:name,value:value}=e.currentTarget;setStateFormData({...stateFormData,[name]:{...stateFormData[name],value:value}})}async function onSubmitHandler(e){e.preventDefault();let data={...stateFormData};data={...data,email:data.email.value||""},data={...data,password:data.password.value||""},data={...data,passwordRep:data.passwordRep.value||""},data={...data,firstName:data.firstName.value||""},data={...data,lastName:data.lastName.value||""},data={...data,userName:data.userName.value||""};const isValid=validationHandler(stateFormData);if(isValid){setLoading(!loading);const kayitApi=await fetch("/api/kayit/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.error("Error:",error)});let result=await kayitApi.json();result.success?Router.push("/"):setStateFormMessage({success:result.success,message:result.message}),setLoading(!1)}}function validationHandler(states,e){const input=e&&e.target.name||"",errors=[];let isValid=!0;return input?(states[input].required&&(states[input].value||(errors[input]={hint:`${states[e.target.name].label} zorunludur`,isInvalid:!0},isValid=!1)),states[input].value&&states[input].min>=states[input].value.length&&(errors[input]={hint:`${states[input].label} en az ${states[input].min} karakter olmalı`,isInvalid:!0},isValid=!1),states[input].value&&states[input].max<=states[input].value.length&&(errors[input]={hint:`${states[input].label} en fazla ${states[input].max} karakter fazla olmalı`,isInvalid:!0},isValid=!1),null!==states[input].validator&&"object"==typeof states[input].validator&&states[input].value&&!states[input].validator.regEx.test(states[input].value)&&(errors[input]={hint:states[input].validator.error,isInvalid:!0},isValid=!1)):Object.entries(states).forEach(item=>{item.forEach(field=>{errors[item[0]]="",field.required&&(field.value||(errors[item[0]]={hint:`${field.label} zorunludur`,isInvalid:!0},isValid=!1)),field.value&&field.min>field.value.length&&(errors[item[0]]={hint:`${field.label} en az ${field.min} karakter olmalı`,isInvalid:!0},isValid=!1),field.value&&field.max<field.value.length&&(errors[item[0]]={hint:`${field.label} en fazla ${field.max} karakter olmalı`,isInvalid:!0},isValid=!1),null!==field.validator&&"object"==typeof field.validator&&"Email"==field.label&&field.value&&!field.validator.regEx.test(field.value)&&(errors[item[0]]={hint:field.validator.error,isInvalid:!0},isValid=!1)}),states.password.value!==states.passwordRep.value&&(console.log(stateFormMessage),setStateFormMessage({success:!1,message:"Şifreler eşleşmiyor"}),isValid=!1)}),isValid&&setStateFormValid(isValid),setStateFormError({...errors}),isValid}useEffect(()=>{let leg;void 0!==profile.username&&Router.push("/profil")},[profile]);const[stateSifreGoster,setStateSifreGoster]=useState(!1);
  return (
    <Layout>
      <Head>
        <title>
          Kayıt Ol! - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Kayıt Ol! - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!"
        />
        <meta
          name="description"
          content="Kayıt Ol! - Kanaryasokağı - Fenerbahçeye dair en güncel, en hızlı haberler! Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
        />
        <meta
          name="keywords"
          content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, fenerbahçe opet"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link rel="canonical" href="https://kanaryasokagi.com/kayit" />
      </Head>
      <div className="h-screen flex flex-wrap justify-center items-center">
        <main>
          {!profile && (
            <div>
              <div>
                <h2 className="text-center">Kayıt Ol</h2>
                {!stateFormMessage.success && (
                  <Message negative>
                    <Message.Header>HATA!</Message.Header>
                    <Message.Content>
                      {stateFormMessage.message}
                    </Message.Content>
                  </Message>
                )}
                <Form onSubmit={onSubmitHandler} className="mt-10">
                  <label className="font-poppins text-lg">Ad:</label>
                  <Form.Input
                    placeholder="Ad"
                    name="firstName"
                    value={stateFormData.firstName.value}
                    onChange={onChangeHandler}
                  />
                  {stateFormError.firstName && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      {stateFormError.firstName.hint}
                    </Message>
                  )}
                  <label className="font-poppins text-lg">Soyad:</label>
                  <Form.Input
                    placeholder="Soyad"
                    name="lastName"
                    value={stateFormData.lastName.value}
                    onChange={onChangeHandler}
                  />
                  {stateFormError.lastName && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      {stateFormError.lastName.hint}
                    </Message>
                  )}
                  <label className="font-poppins text-lg">Kullanıcı adı:</label>
                  <Form.Input
                    placeholder="Kullanıcı adı"
                    name="userName"
                    value={stateFormData.userName.value}
                    onChange={onChangeHandler}
                  />
                  {stateFormError.userName && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      {stateFormError.userName.hint}
                    </Message>
                  )}
                  <label className="font-poppins text-lg">Email:</label>
                  <Form.Input
                    placeholder="Email"
                    name="email"
                    value={stateFormData.email.value}
                    onChange={onChangeHandler}
                  />
                  {stateFormError.email && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      {stateFormError.email.hint}
                    </Message>
                  )}
                  {!stateSifreGoster ? (
                    <>
                      <label className="font-poppins text-lg">Şifre:</label>
                      <Form.Input
                        placeholder="Şifre"
                        name="password"
                        type="password"
                        value={stateFormData.password.value}
                        onChange={onChangeHandler}
                      />
                      {stateFormError.password && (
                        <Message negative>
                          <Message.Header>HATA!</Message.Header>
                          {stateFormError.password.hint}
                        </Message>
                      )}
                      <label className="font-poppins text-lg">
                        Şifre Tekrarı:
                      </label>
                      <Form.Input
                        placeholder="Şifre Tekrarı"
                        name="passwordRep"
                        type="password"
                        value={stateFormData.passwordRep.value}
                        onChange={onChangeHandler}
                      />
                    </>
                  ) : (
                    <>
                      <label className="font-poppins text-lg">Şifre:</label>
                      <Form.Input
                        placeholder="Şifre"
                        name="password"
                        value={stateFormData.password.value}
                        onChange={onChangeHandler}
                      />
                      {stateFormError.password && (
                        <Message negative>
                          <Message.Header>HATA!</Message.Header>
                          {stateFormError.password.hint}
                        </Message>
                      )}
                      <label className="font-poppins text-lg">
                        Şifre Tekrarı:
                      </label>
                      <Form.Input
                        placeholder="Şifre Tekrarı"
                        name="passwordRep"
                        value={stateFormData.passwordRep.value}
                        onChange={onChangeHandler}
                      />
                    </>
                  )}
                  <Form.Field>
                  <Checkbox
                      className="font-poppins"
                      onChange={() => {
                        setStateSifreGoster(!stateSifreGoster);
                      }}
                      label="Şifreyi göster"
                    />
                  </Form.Field>
                  {stateFormError.passwordRep && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      {stateFormError.passwordRep.hint}
                    </Message>
                  )}
                  <Form.Button
                    style={{ backgroundColor: "#12326e", color: "#ffffff" }}
                    className="text-center"
                    content="Kayıt"
                  />
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
  const { req: req } = context,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = `/api`,
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";
  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}
