import React from 'react'
import Layout from '../../components/Layout'

const DirectBoxes = [
  {
    label: 'Reviews',
    icon: '/icon/star.png',
  },
  {
    label: 'Active VC',
    icon: '/icon/vc.png',
  },
  {
    label: 'People',
    icon: '/icon/people.png',
  },
  {
    label: 'Companies',
    icon: '/icon/company.png',
  },
  {
    label: 'Product',
    icon: '/icon/product.png',
  }
]

const Directory = () => {

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          DirectBoxes.map(item => (
            <div key={item.label}>
              <div
                className="h-[200px] lg:h-[250px] xl:h-[350px] text-white text-lg lg:text-2xl rounded-[30px] p-5 transition border border-gray-500/0 hover:border-gray-500/100 bg-zoom-hover"
                style={{
                  backgroundImage: item.label === "Reviews" ? "linear-gradient(143.69deg, #FFBE18 12.27%, #FF6B00 92.01%)" : "linear-gradient(143.69deg, #323232 12.27%, #292929 92.01%)",
                }}
              >
                <img src={item.icon} className="bottom-[90px] font-semibold absolute w-14" alt="Directory Icons" />
                <div className="bottom-10 font-semibold absolute">{item.label}</div>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Directory