"use client";

import React from "react";
import Btn from "@/components/global/Btn";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Awrd_2023 from "./_components/Awrd_2023";
import Awrd_2024 from "./_components/Awrd_2024";
import Awrd_2025 from "./_components/Awrd_2025";

const Awards = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt-[80px] pb-[45px]">
        <div className="flex items-center md:flex-row flex-col md:items-baseline gap-[5px] md:gap-[20px] absolute md:top-[89px] 1280:top-[115px] top-[34px]">
          <h1 className="sec_hd bw-r">Awards</h1>
          <img src="/txt_grd_box.svg" className="mb-[0px] lg:w-[auto] md:w-[120px] w-[100px]" />
        </div>
        <div className="flex">
          <div className="w-full">
            <TabContext value={value} className=''>
              <Box
                sx={{
                  borderBottom: 0,
                  borderColor: "divider",
                  width: "fit-content",
                  float: "right",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="border-1 border-[#CDCDCD] rounded-[20px]"
                >
                  {/* <Tab
                    sx={{
                      height: {
                        xs: '60px',  // Mobile (xs breakpoint)
                        md: '60px',
                        lg: '80px',
                        xl: '100px'    // Tablets and up
                      },
                      width: {
                        xs: '50%',  // Mobile (xs breakpoint)
                        md: '50%',
                        lg: '130px',
                        xl: '165px'  // Tablets and up
                      },
                      color: "#000",
                      fontFamily: "Barlow",
                      fontSize: {
                        xs: '19px',  // Mobile (xs breakpoint)
                        md: '21px',
                        lg: '23px',
                        xl: '23px'  // Tablets and up
                      },
                      fontWeight: "400",
                      ":hover": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                      },
                      "&.Mui-selected": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                        border: "none",
                      },
                    }}
                    label="2025"
                    value="1"
                  /> */}
                  <Tab
                    sx={{
                      height: {
                        xs: '60px',  // Mobile (xs breakpoint)
                        md: '60px',
                        lg: '80px',
                        xl: '100px'   // Tablets and up
                      },
                      width: {
                        xs: '50%',  // Mobile (xs breakpoint)
                        md: '50%',
                        lg: '130px',
                        xl: '165px'  // Tablets and up
                      },
                      color: "#000",
                      fontFamily: "Barlow",
                      fontSize: {
                        xs: '19px',  // Mobile (xs breakpoint)
                        md: '21px',
                        lg: '23px',
                        xl: '23px'  // Tablets and up
                      },
                      fontWeight: "400",
                      ":hover": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                      },
                      "&.Mui-selected": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                        border: "none",
                      },
                    }}
                    label="2024"
                    value="1"
                  />
                  <Tab
                    sx={{
                      height: {
                        xs: '60px',  // Mobile (xs breakpoint)
                        md: '60px',
                        lg: '80px',
                        xl: '100px'   // Tablets and up
                      },
                      width: {
                        xs: '50%',  // Mobile (xs breakpoint)
                        md: '50%',
                        lg: '130px',
                        xl: '165px'  // Tablets and up
                      },
                      color: "#000",
                      fontFamily: "Barlow",
                      fontSize: {
                        xs: '19px',  // Mobile (xs breakpoint)
                        md: '21px',
                        lg: '23px',
                        xl: '23px'  // Tablets and up
                      },
                      fontWeight: "400",
                      ":hover": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                      },
                      "&.Mui-selected": {
                        background:
                          "radial-gradient(146.84% 113.11% at 27.16% 116.5%, #F47922 0%, #8B37A4 100%)",
                        color: "#fff",
                        border: "none",
                      },
                    }}
                    label="2023"
                    value="2"
                  />
                </TabList>
              </Box>

              {/* <TabPanel
                value="1"
                sx={{
                  float: "left",
                  paddingTop: "70px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  width: "100%",
                }}
              >
                <Awrd_2025 />
              </TabPanel> */}

              <TabPanel
                value="1"
                sx={{
                  float: "left",
                  paddingTop: "70px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  width: "100%",
                }}
              >
                <Awrd_2024 />
              </TabPanel>

              <TabPanel
                value="2"
                sx={{
                  float: "left",
                  paddingTop: "70px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  width: "100%",
                }}
              >
                <Awrd_2023 />
              </TabPanel>

            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
