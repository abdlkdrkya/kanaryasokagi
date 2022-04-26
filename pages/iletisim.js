import { useState } from "react";
import { Form, Grid, Label } from "semantic-ui-react";
import Layout from "../components/layout";
export default function İletisim() {
  const emailRegEx =
      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    [stateMail, setStateMail] = useState({
      mail: "",
      mailTo: "iletisim@kanaryasokagi.com",
      subject: "",
      body: "",
      ad: "",
      soyad: "",
    }),
    [stateAd, setStateAd] = useState(!1),
    [stateSoyad, setStateSoyad] = useState(!1),
    [stateMailAdres, setStateMailAdres] = useState(!1),
    [stateKonu, setStateKonu] = useState(!1),
    [stateEmailError, setStateEmailError] = useState(""),
    [stateMesaj, setStateMesaj] = useState(!1),
    {
      mail: mail,
      mailTo: mailTo,
      subject: subject,
      body: body,
      ad: ad,
      soyad: soyad,
    } = stateMail,
    handleChangeMailState = (e, { name: name, value: value }) => {
      setStateMail({ ...stateMail, [name]: value });
    },
    apo = () => {
      if (
        (stateMail.ad.length < 1 ? setStateAd(!0) : setStateAd(!1),
        stateMail.soyad.length < 1 ? setStateSoyad(!0) : setStateSoyad(!1),
        stateMail.subject.length < 1 ? setStateKonu(!0) : setStateKonu(!1),
        stateMail.body.length < 1 ? setStateMesaj(!0) : setStateMesaj(!1),
        stateMail.mail.length < 1
          ? (setStateEmailError("Lütfen mail adresinizi giriniz"),
            setStateMailAdres(!0))
          : setStateMailAdres(!1),
        stateMail.ad.length > 0 &&
          stateMail.soyad.length > 0 &&
          stateMail.subject.length > 0 &&
          stateMail.body.length > 0 &&
          stateMail.mail.length > 0)
      )
        if (
          (setStateAd(!1),
          setStateSoyad(!1),
          setStateKonu(!1),
          setStateMesaj(!1),
          setStateMailAdres(!1),
          stateMail.mail.match(emailRegEx))
        ) {
          var link =
            `mailTo:` + mailTo+
            `?cc=` +
            "&subject=" +
            encodeURIComponent(subject) +
            "&body=" + body + '%0D%0A' +ad+' '+soyad  ;
          window.location.href = link;
        } else
          setStateEmailError("Lütfen geçerli bir email adresi giriniz!"),
            setStateMailAdres(!0);
    };
  return (
    <Layout>
      <div className="h-screen">
        <div className="mb-2 mt-2"></div>
        <Grid container>
          <Grid.Row>
            <div className="p-4 w-full">
              <div className="font-poppins mb-6 mt-6">
                <p>
                  <strong>Soru</strong>, <strong>öneri</strong>,{" "}
                  <strong>şikayet</strong> ve <strong>reklam işbirliği</strong>{" "}
                  için bizimle iletişime geçin!
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-poppins font-bold text-xl">İletişim</h4>
              </div>
              <div>
                <h5 className="font-poppins font-medium text-lg underline">
                  Telefon:
                </h5>
              </div>
              <div className="mb-4">
                <span className="font-poppins font-semibold text-md">
                  +90 546 202 74 07
                </span>
              </div>
              <div className="mb-4">
                <h5 className="font-poppins font-medium text-lg underline">
                  Mail:
                </h5>
              </div>
              <div>
                <Form>
                  <Form.Group>
                    <Form.Field>
                      <Form.Input
                        name="ad"
                        value={ad}
                        label="Adınız:"
                        placeholder="Adınız"
                        onChange={handleChangeMailState}
                      />
                      {stateAd && (
                        <Label basic color="red" pointing>
                          Lütfen adınızı giriniz
                        </Label>
                      )}
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        name="soyad"
                        value={soyad}
                        label="Soyadınız:"
                        placeholder="Soyadınız"
                        onChange={handleChangeMailState}
                      />
                      {stateSoyad && (
                        <Label basic color="red" pointing>
                          Lütfen adınızı giriniz
                        </Label>
                      )}
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <Form.Input
                      name="mail"
                      value={mail}
                      label="Mail Adresiniz:"
                      placeholder="Mail adresiniz"
                      onChange={handleChangeMailState}
                    ></Form.Input>
                    {stateMailAdres && (
                      <Label basic color="red" pointing>
                        {stateEmailError}
                      </Label>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="subject"
                      value={subject}
                      placeholder="Konu"
                      label="Konu:"
                      onChange={handleChangeMailState}
                    ></Form.Input>
                    {stateKonu && (
                      <Label basic color="red" pointing>
                        Lütfen konuyu belirtiniz
                      </Label>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <Form.TextArea
                      name="body"
                      value={body}
                      placeholder="Mesajınız"
                      label="Mesajınız:"
                      onChange={handleChangeMailState}
                    ></Form.TextArea>
                    {stateMesaj && (
                      <Label basic color="red" pointing>
                        Lütfen mesajınızı yazınız
                      </Label>
                    )}
                  </Form.Field>
                  <Form.Button
                    fluid
                    style={{ backgroundColor: "#12326e", color: "white" }}
                    onClick={apo}
                  >
                    Gönder
                  </Form.Button>
                </Form>
              </div>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  );
}
