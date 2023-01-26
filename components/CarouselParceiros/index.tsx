import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel';
import styles from "./MenuHamburger.module.scss";

export default function CarouselParceiros() {

    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem, 
      } = useSpringCarousel({

        items: [
          {
            id: 'item-1',
            renderItem: (
              <div>
                  renderrender 1
              </div>
            )
          },
          {
            id: 'item-2',
            renderItem: (
              <div>
                  renderrender 1
              </div>
            )
          },{
            id: 'item-3',
            renderItem: (
              <div>
                  renderrender 1
              </div>
            )
          }
        ]
      })
    

  return (
    <div></div>
  )
}
