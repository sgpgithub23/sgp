import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import styles from "./Dropdown.module.scss"


type PropsDropdown = {
  values: {value: any, label: any}[]
}

export default function Dropdown(props: PropsDropdown) {

  const [label, setLabel] = useState<{value: any, label: any}>()

  return (

    <div className={styles.main}>
      <Menu as="div" className={styles.menuAsDiv}>
        <div>
          <Menu.Button className={styles.menuButton}>
            {label?.label ?? "Escolha..."}
            <BsChevronDown
              aria-hidden="true"
              className={styles.svg}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter={styles.enter}
          enterFrom={ styles.enterFrom }
          enterTo={ styles.enterTo }
          leave={ styles.leave}
          leaveFrom={ styles.leaveFrom }
          leaveTo={ styles.leaveTo }
        >
          <Menu.Items className={styles.menuItems}>
            <div >
              {props.values?.length > 0 ? 
                props.values?.map((x) => (
                  <Menu.Item key={x.value}>
                    {({ active }) => (
                      <button onClick={() => setLabel(x)} className={styles.dropdown}>
                        {x.label}
                      </button>
                    )}
                  </Menu.Item>
                )) : (
                  <Menu.Item>
                    {({ active }) => (
                      <button className={styles.dropdown}>
                        Não há items...
                      </button>
                    )}
                  </Menu.Item>
                )
              } 
              
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
