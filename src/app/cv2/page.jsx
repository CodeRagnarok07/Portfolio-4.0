import React from 'react'
import Skills from './skills'
export default function page() {
    return (
        <div className='flex  w-[90%] mx-auto my-4 pb-4'>

            <div className="left card_shadow w-[40%] bg-sky-900 text-white font-semibold p-4">
                <div className="item">
                    <div className="title">
                        <h2>Contacto</h2>
                        <hr />
                    </div>

                    <div className='flex flex-col'>
                        <ul>
                            <li>
                                <a href="mailto:angelriera1796@gmail.com">
                                    <i className='icon w-4'><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 10.5H12V3.9375L7.5 6.75L3 3.9375V10.5H1.5V1.5H2.4L7.5 4.6875L12.6 1.5H13.5M13.5 0H1.5C0.6675 0 0 0.6675 0 1.5V10.5C0 10.8978 0.158035 11.2794 0.43934 11.5607C0.720644 11.842 1.10218 12 1.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0V0Z" fill="black" />
                                    </svg>
                                    </i>
                                    angelriera1796@gmail.com
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/angelriera/">
                                    <i className='icon w-4'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3333 3C16.7754 3 17.1993 3.17559 17.5118 3.48816C17.8244 3.80072 18 4.22464 18 4.66667V16.3333C18 16.7754 17.8244 17.1993 17.5118 17.5118C17.1993 17.8244 16.7754 18 16.3333 18H4.66667C4.22464 18 3.80072 17.8244 3.48816 17.5118C3.17559 17.1993 3 16.7754 3 16.3333V4.66667C3 4.22464 3.17559 3.80072 3.48816 3.48816C3.80072 3.17559 4.22464 3 4.66667 3H16.3333ZM15.9167 15.9167V11.5C15.9167 10.7795 15.6304 10.0885 15.121 9.57903C14.6115 9.06955 13.9205 8.78333 13.2 8.78333C12.4917 8.78333 11.6667 9.21667 11.2667 9.86667V8.94167H8.94167V15.9167H11.2667V11.8083C11.2667 11.1667 11.7833 10.6417 12.425 10.6417C12.7344 10.6417 13.0312 10.7646 13.25 10.9834C13.4688 11.2022 13.5917 11.4989 13.5917 11.8083V15.9167H15.9167ZM6.23333 7.63333C6.60464 7.63333 6.96073 7.48583 7.22328 7.22328C7.48583 6.96073 7.63333 6.60464 7.63333 6.23333C7.63333 5.45833 7.00833 4.825 6.23333 4.825C5.85982 4.825 5.5016 4.97338 5.23749 5.23749C4.97338 5.5016 4.825 5.85982 4.825 6.23333C4.825 7.00833 5.45833 7.63333 6.23333 7.63333M7.39167 15.9167V8.94167H5.08333V15.9167H7.39167V15.9167Z" fill="black" />
                                    </svg>
                                    </i>https://www.linkedin.com/in/angelriera/
                                </a>
                            </li>

                        </ul>
                        <li><a href="https://github.com/RagnarokDv"> <i className='icon w-4'><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0.25C5.67924 0.25 4.86651 0.411661 4.10823 0.725753C3.34994 1.03984 2.66095 1.50022 2.08058 2.08058C0.90848 3.25269 0.25 4.8424 0.25 6.5C0.25 9.2625 2.04375 11.6062 4.525 12.4375C4.8375 12.4875 4.9375 12.2938 4.9375 12.125V11.0687C3.20625 11.4437 2.8375 10.2312 2.8375 10.2312C2.55 9.50625 2.14375 9.3125 2.14375 9.3125C1.575 8.925 2.1875 8.9375 2.1875 8.9375C2.8125 8.98125 3.14375 9.58125 3.14375 9.58125C3.6875 10.5313 4.60625 10.25 4.9625 10.1C5.01875 9.69375 5.18125 9.41875 5.35625 9.2625C3.96875 9.10625 2.5125 8.56875 2.5125 6.1875C2.5125 5.49375 2.75 4.9375 3.15625 4.49375C3.09375 4.3375 2.875 3.6875 3.21875 2.84375C3.21875 2.84375 3.74375 2.675 4.9375 3.48125C5.43125 3.34375 5.96875 3.275 6.5 3.275C7.03125 3.275 7.56875 3.34375 8.0625 3.48125C9.25625 2.675 9.78125 2.84375 9.78125 2.84375C10.125 3.6875 9.90625 4.3375 9.84375 4.49375C10.25 4.9375 10.4875 5.49375 10.4875 6.1875C10.4875 8.575 9.025 9.1 7.63125 9.25625C7.85625 9.45 8.0625 9.83125 8.0625 10.4125V12.125C8.0625 12.2938 8.1625 12.4938 8.48125 12.4375C10.9625 11.6 12.75 9.2625 12.75 6.5C12.75 5.67924 12.5883 4.86651 12.2742 4.10823C11.9602 3.34994 11.4998 2.66095 10.9194 2.08058C10.3391 1.50022 9.65006 1.03984 8.89177 0.725753C8.13349 0.411661 7.32076 0.25 6.5 0.25V0.25Z" fill="black" />
                        </svg>
                        </i>https://github.com/RagnarokDv</a></li>

                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h2>Habilidades tecnicas</h2>

                        <hr />
                    </div>

                    <Skills />
                </div>


                <div className="item mb-10">
                    <div className="title">
                        <h2>Sobre Mi </h2>
                        <hr />
                    </div>

                    <p>me considero emprendedor, actualmente soy miembro fundador de Loickteam de una startup de emprendedores unidos por la pasión de desarrollar sus ideas.
                        <br />
                        <br />
                         los pilares fundamentales de mi código ético son la virtud el valor y la gratitud
                    </p>


                </div>
            </div>


            <div className='flex flex-col w-full'>

                <div className="card_shadow w-full bg-slate-800 text-white py-4">
                    <h1 className='text-7xl text-center pb-6'>

                        Angel Riera
                    </h1>
                    <div className='flex w-[80%] mx-auto justify-center gap-4 items-center '>
                        <hr className='border-t-4 border-white w-[40px] -mb-2' />
                        <h5 className='text-2xl text-center'>Desarrollador web full stack</h5>
                        <hr className='border-t-4 border-white w-[40px] -mb-2' />
                    </div>
                </div>

                <div className="right card_shadow ">
                    <h1 className=''>Experiencia laboral:</h1>
                    <div className='item'>
                        <h2>Arasait [ julio 2022 - Ahora ] :</h2>
                        <div className='sub_item'>
                            <h3 ><span>OEA</span>: maquetación de template en tailwind para sitio web gubernamental</h3>
                            <ul>
                                <li>Diseño a detalle provisto por la contratista</li>
                                <li>Diseño responsivo</li>
                            </ul>
                        </div>
                        <div className='sub_item'>
                            <h3 ><span>OkConstructora</span>: </h3>
                            <ul>
                                <li>Diseño a detalle proveído por la contratistaMaquetado con HTML y SCSS</li>
                                <li>desarrollado en Wordpress templates</li>
                                <li>Funcionalidades de componentes tipo carrusel con JavaScript</li>
                                <li>Diseño responsivo</li>
                                <li>deploy en cpanel</li>
                            </ul>
                        </div>
                        <div className='sub_item'>
                            <h3 ><span>Upisa</span>: Sitio web internacional</h3>
                            <ul>
                                <li>Sitio creado usando  Django + javascript</li>
                                <li>Maquetado con tailwind CSS + SCSS</li>
                                <li>Creación de componentes reactivos en JavaScript</li>
                                <li>Internacionalización de contenido con Django a Español, Chino, Ruso e Inglés</li>
                                <li>Diseño a detalle proveído por la contratista</li>
                                <li>Diseño responsivo</li>
                            </ul>
                        </div>
                    </div>

                    <div className='item'>
                        <h2 >Tribunal Administrativo Tributario [ agosto 2022 - enero 2023] :</h2>
                        <div className='sub_item'>
                            <h3 >Sitio web gubernamental con administrador de contenido de archivos y noticias</h3>
                            <ul>
                                <li>Backend desarrollado usando Django y Django rest framework para proveer de la api</li>
                                <li>Frontend desarrollado usando Next.js,</li>
                                <li>Uso de HOC para agregar paginación y buscador a cada listado de archivos</li>
                                <li>input de imágenes por arrastra y suelta</li>
                                <li>Maquetado con tailwind CSS + SCSS</li>
                                <li>Diseño a detalle provisto por la contratista</li>
                                <li>Organización del proyecto contenedores en docker</li>
                                <li>Deploy en aws, vps Windows nginx</li>
                            </ul>

                        </div>

                    </div>

                    <div className='item'>
                        <h2 >Freelance [ junio 2022 -  Ahora ]:</h2>
                        <div className='sub_item'>
                            <h3 ><span>XGULAG</span>: Portafolio personal</h3>
                            <ul>
                                <li>Maquetado con tailwind CSS + SCSS</li>
                                <li>Diseño responsivo</li>
                            </ul>
                        </div>

                        <div className='sub_item'>
                            <h3 ><span>Arrullos</span>: Frontend de Administrador de contenido de tienda online</h3>
                            <ul>
                                <li>Sitio completamente creado usando  Next.js</li>
                                <li>Maquetado con tailwind CSS</li>
                                <li>Conectado al backend por medio de GraphQL con reactQuery</li>
                                <li>Funcionalidad diferentes inputs de imágenes por arrastra y suelta usando s3 aws</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
