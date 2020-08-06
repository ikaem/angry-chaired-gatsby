// contact.tsx

import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"

import Layout from "../components/layout.component"
import PageTitle from "../elements/page-title.element"

const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<{
    submitting: boolean
    status: { ok: boolean; msg: string } | null
  }>({
    submitting: false,
    status: null,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    setSubmissionState(prevState => {
      return {
        ...prevState,
        submitting: true,
      }
    })

    axios({
      method: "post",
      url: "https://getform.io/f/53a34abc-648d-4d47-81f3-10fbc475eac9",
      data: new FormData(form),
    })
      .then(response => {
        console.log(response)
        if (response.status !== 200) throw new Error("Send message failed")

        form.reset()

        setSubmissionState(prevState => {
          return {
            status: {
              ok: true,
              msg:
                "Thank you! Your message was sent successfully. I will respond as soon as possible.",
            },
            submitting: false,
          }
        })
      })
      .catch(error => {
        console.log(error)
        setSubmissionState(prevState => {
          return {
            status: {
              ok: false,
              msg:
                "There was a problem submitting the message. Please try again or use one of the other contact options. Thank you.",
            },
            submitting: false,
          }
        })
      })
  }

  return (
    <Layout>
      <ContactStyled className="contact-page">
        <section
          className="contact-page__message-section"
          onSubmit={handleSubmit}
        >
          <PageTitle pageTitle={"Contact"} />
          <h2 className="message-section__paragraph-title">Message me</h2>

          <form className="message-section__message-form">
            <label htmlFor="name" className="message-form__label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="message-form__input"
              name="name"
              required
            />
            <label htmlFor="email" className="message-form__label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="message-form__input"
              name="email"
              required
            />
            <label htmlFor="subject" className="message-form__label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="message-form__input"
              name="subject"
              required
            />
            <label htmlFor="message" className="message-form__label span-2">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows={10}
              className="message-form__input span-2"
              required
            />

            <button
              type="submit"
              className="message-form__btn-submit"
              disabled={submissionState.submitting}
            >
              <span className="btn-submit__label">Send</span>
            </button>

            {submissionState.status && (
              <p
                className={`${
                  submissionState.status.ok ? "message-success" : "message-fail"
                } span-2 message-form__submission-message`}
              >
                {submissionState.status.msg}
              </p>
            )}

            {/* "span-2 message-form__submission-message" */}
          </form>
        </section>
        <aside className="contact-page__contacts-section">
          <h3 className="contacts-section__paragraph-title">
            Get in touch via:
          </h3>
          <ul className="contacts-section__paragraph-content contacts-section__contacts-list">
            <li className="contacts-list__list-item">
              <FontAwesomeIcon
                className="list-item__icon"
                icon={["fab", "github-square"]}
              />
              <a className="list-item__link" href="https://github.com">
                github.com/ikaem
              </a>
            </li>
            <li className="contacts-list__list-item">
              <FontAwesomeIcon
                className="list-item__icon"
                icon={["fab", "twitter-square"]}
              />
              <a className="list-item__link" href="https://github.com">
                twitter.com/angrychaired
              </a>
            </li>
            <li className="contacts-list__list-item">
              <FontAwesomeIcon
                className="list-item__icon"
                icon={["fab", "facebook-square"]}
              />
              <a className="list-item__link" href="https://github.com">
                facebook.com/angrychaired
              </a>
            </li>
            <li className="contacts-list__list-item">
              <FontAwesomeIcon
                className="list-item__icon"
                icon={["fas", "envelope-square"]}
              />
              <a
                className="list-item__link"
                href="mailto://angrychaired@gmail.com"
              >
                angrychaired@gmail.com
              </a>
            </li>
          </ul>
        </aside>
      </ContactStyled>
    </Layout>
  )
}

export default Contact

const ContactStyled = styled.main`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;

  .contact-page__message-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .message-section__paragraph-title {
    color: var(--smudgedblue);
    margin: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .message-section__message-form {
    margin-top: 1rem;
    align-self: stretch;
    display: grid;
    grid-template-columns: 1fr;
  }

  .message-form__label {
    font-size: 1rem;
    color: var(--smudgedblue);
    margin-bottom: 0.25rem;
  }

  .message-form__label[for="message"] {
    margin-top: 0.5rem;
  }

  .message-form__input {
    border: none;
    padding: 0.5rem;
    color: var(--textblue);
    background-color: var(--bluegreen);
    margin-bottom: 1rem;
  }

  .message-form__btn-submit {
    background-color: var(--red);
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    box-shadow: 0 1px rgb(88, 88, 88);
    cursor: pointer;
    border: none;
  }

  .message-form__btn-submit:disabled {
    background-color: grey;
    cursor: not-allowed;

    :hover {
      background-color: grey;
      .btn-submit__label {
        color: var(--touchedwhite);
      }
    }
  }

  .btn-submit__label {
    color: var(--touchedwhite);
    display: block;
  }

  .message-form__btn-submit:hover {
    background-color: var(--usedyellow);

    .btn-submit__label {
      color: var(--smudgedblue);
      transform: rotateZ(1.4deg);
    }
  }

  .message-form__submission-message {
    margin-top: 1rem;
    padding: 1rem;
    color: white;

    /* background-color: lightgrey;
    color: black; */
  }

  .message-success {
    background-color: #80e633;
  }
  .message-fail {
    background-color: #080f04;
  }

  /* .message-form__btn-submit {
    background-color: pink;
  } */

  .contact-page__contacts-section {
    margin: 1.5rem 0 1rem;
    border-top: 4px solid var(--usedyellow);
    padding-top: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contacts-section__paragraph-title {
    margin: 1rem 0 0.25rem;
    font-size: 1.25rem;
    color: var(--smudgedblue);
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .contacts-section__paragraph-content {
    line-height: 1.3rem;
  }

  .list-item__icon {
    color: var(--textblue);
    font-size: 1rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  .list-item__link {
    color: var(--textblue);
    font-size: 1rem;
    vertical-align: top;
  }

  .contacts-list__list-item:hover {
    .list-item__icon {
      color: var(--usedyellow);
    }
    .list-item__link {
      color: var(--red);
    }
  }

  @media (min-width: 40rem) {
    padding: 1rem 1.5rem;
    flex-direction: row;
    width: 100%;

    .contact-page__message-section {
      width: 60%;
      margin: 0 0.5rem 1rem 0;
    }

    .message-section__paragraph-title {
      margin: 1rem 0 0.5rem;
      font-size: 1.5rem;
    }

    .message-section__message-form {
      margin-top: 1.5rem;
      grid-template-columns: auto 1fr;
      gap: 0.5rem 1rem;
      align-items: center;
    }

    .message-form__label {
      margin-bottom: 0;
      margin-right: 2rem;
      font-size: 1.15rem;
    }

    .message-form__input {
      margin-bottom: 0;
      padding: 0.75rem;
    }

    .span-2 {
      grid-column: span 2;
    }

    .contact-page__contacts-section {
      align-self: flex-start;
      width: 40%;
      padding: 0 0 0 1.5rem;
      border-left: 4px solid var(--usedyellow);
      border-top: none;
      margin: 4.75rem 0 1rem 1rem;
      align-items: flex-start;
      opacity: 0.6;
    }

    .contacts-section__paragraph-title {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
    }

    .contacts-section__paragraph-content {
      line-height: 1.4rem;
    }

    .list-item__icon {
      font-size: 1.15rem;
      margin-right: 1rem;
    }

    .list-item__link {
      font-size: 1.15rem;
    }
  }
`
