import { Link } from "react-router-dom"

export const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error laudantium dolor quia rerum dolorem esse eaque hic neque ea!</p>
            <Link to="/products" type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explorar</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://ideasparalaweb.com/wp-content/uploads/2023/02/ecommerce.jpeg" alt="Hero Section" />
        </div>
    </section>
  )
}