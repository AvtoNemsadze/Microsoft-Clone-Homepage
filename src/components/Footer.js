import React, { useState } from 'react'
import data from './content/footer'
import { IoMdGlobe } from 'react-icons/io'

const Footer = () => {
  const [links, setLinks] = useState(data)

  return (
    <>
      <footer className="footer bg-gray-100 px-8 py-4 md:grid grid-cols-2 xl:grid-cols-6 xl:pl-20">
        {links.map((link) => {
          const { id, title, links } = link

          return (
            <div key={id} >
              <div className="mb-10">
                <h6 className="font-semibold text-gray-600">{title}</h6>
                {links.map((link) => {
                  return (
                    <li key={links} className="mylinks text-gray-600 text-sm my-2">
                      {link}
                    </li>
                  )
                })}
              </div>
            </div>
          )
        })}
      </footer>


      <div className="footer2 bg-gray-100 px-8 pb-4 md:flex items-center justify-between xl:px-20">
        <div className="flex items-center text-gray-500">
          <IoMdGlobe className="mr-3 text-2xl" />
          <h6 className="text-xs">English (United States)</h6>
        </div>

        <div>
          <ul className="flex flex-wrap text-xs mt-4 text-gray-500">
            <li className="mr-4">Sitemap</li>
            <li className="mr-4">Contact Microsoft</li>
            <li className="mr-4">Privacy</li>
            <li className="mr-4">Terms of Use</li>
            <li className="mr-4">Trademarks</li>
            <li className="mr-4">Safety &amp; eco</li>
            <li className="mr-4">About our ads</li>
            <li>&copy; Microsoft 2022</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
