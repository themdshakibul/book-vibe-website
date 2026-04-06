import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProveider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";

function Books() {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks, wishList);

  return (
    <section>
      <div className="container mx-auto px-2 mt-10">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList />
          </TabPanel>

          <TabPanel>
            <ListedWishList />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Books;
