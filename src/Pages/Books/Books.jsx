import React, { useState } from "react";
import { BookContext } from "../../Context/BookProveider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";

function Books() {
  const [sortingType, setsortingType] = useState("");

  return (
    <section>
      <div className="container mx-auto px-2 mt-10">
        <div className="flex justify-center py-4">
          <div className="dropdown dropdown-bottom dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-black text-white"
            >
              Click : {sortingType} ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setsortingType("pages")}>
                <a>Pages</a>
              </li>
              <li onClick={() => setsortingType("reating")}>
                <a>Reating</a>
              </li>
            </ul>
          </div>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList sortingType={sortingType} />
          </TabPanel>

          <TabPanel>
            <ListedWishList sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Books;
