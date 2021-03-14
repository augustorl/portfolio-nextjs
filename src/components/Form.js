import React, { useState, useContext, useRef } from 'react';
// import axios from 'axios';
import { Context } from '../components/Wrapper';
import Input from '../components/Input'
import { Form, setErrors } from '@unform/web'
import TextArea from '../components/Textarea'
import * as Yup from 'yup';
import { Container, ContactForm } from '../styles/components/Form';

// Recaptcha HTML 6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO

export default function MyForm() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
            name: Yup.string().required('(*) Por favor, digite seu nome.'),
            email: Yup.string().email('Digite um e-mail válido.').required('(*) Por favor, digite seu e-mail preferido.'),
            message: Yup.string().required('(*) Por favor, preencha a sua mensagem.')
        })
        
    
        await schema.validate(data, {
            abortEarly: false,
        })


        console.log(data);
    } catch(err) {
        if(err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach(error => {
                errorMessages[error.path] = error.message;
            })

            formRef.current.setErrors(errorMessages);
        }
    }
}

  const context = useContext(Context);

  const translatedText = context.translation;

  return (
    <div>
      <Container>
        <ContactForm>
          <h1>
            {translatedText.contactTitle}
           </h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <label htmlFor="name">
                      <Input
                        name="name"
                        id="name"
                        placeholder={translatedText.namePlaceholder}
                      />
                    </label>
                    <label htmlFor="email">
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                      />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="message">
                      <TextArea
                        id="message"
                        name="message"
                        component="textarea"
                        placeholder={translatedText.messagePlaceholder}
                      />
                    </label>

                    <button
                      className="g-recaptcha"
                      data-sitekey="6LcEkMIUAAAAAB8PA3S9CAle8rF58B1EuT1s2HBO"
                      data-callback="onSubmit"
                      type="submit"
                    >
                      {translatedText.buttonContent}
                    </button>
                  </li>
                </ul>
            </Form>
        </ContactForm>
      </Container>
    </div>
  );
};