export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Referencias Sobre la Pagina</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h3>
                      <p className="my-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, amet!"</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Lorem, ipsum.</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Desarrollador en Ramdom AI</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h3>
                      <p className="my-4 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, sapiente.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Lorem, ipsum.</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lider de diseño en Random</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h3>
                      <p className="my-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolore.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Lorem, ipsum.</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Ingeniero en Software para Random</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h3>
                      <p className="my-4 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime.</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" alt="user" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Lorem, ipsum.</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO en Ramdom</div>
                      </div>
                  </figcaption>    
              </figure>
          </div>
      </section>
    )
  }