import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./Dropdown.module.scss";

type PropsValuesFromOutside = {
  label: string;
  value: any;
};

type PropsDropdown = {
  values: { value: any; label: any }[];
  returnedValues: React.Dispatch<React.SetStateAction<PropsValuesFromOutside>>;
  currentValue: { value: any; label: any };
};

export default function Dropdown(props: PropsDropdown) {
  const [data, setData] = useState<{ value: any; label: any }>();

  useEffect(() => {
    setData(props.currentValue);
  }, [props.currentValue]);

  return (
    <div className={styles.main}>
      <Menu as="div" className={styles.menuAsDiv}>
        <div>
          <Menu.Button className={styles.menuButton}>
            {data?.label.length > 0 ? data?.label : "Escolha..."}
            <BsChevronDown aria-hidden="true" className={styles.svg} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <Menu.Items className={styles.menuItems}>
            <div>
              {props.values?.length > 0 ? (
                props.values?.map((x) => (
                  <Menu.Item key={x.value}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setData(x);
                          props.returnedValues(x);
                        }}
                        className={styles.dropdown}
                      >
                        {x.label}
                      </button>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <button className={styles.dropdown}>Não há items...</button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
