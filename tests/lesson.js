import { test } from "node:test";
import assert from "node:assert";
import { chromium } from "@playwright/test";
import { HomePage } from "./homePage.js";


let loginDate = [
    {
      mail:"goddessesgames@gmail.com",
      password:"123456",
      result:"Wrong password or login, enter again",
      locator:'//*[@id="root"]/div/section/div[2]/div/div/section/form/div[4]/div'
  },
  
  {
     mail:"goddessesgame@gmail.com",
      password:"",
      result:"Please, enter password",
      locator:'//*[@id="root"]/div/section/div[2]/div/div/section/form/div[2]/label[2]'
  
  },
]
loginDate.forEach(({mail,password,result,locator})=>{
 test('Open', async({})=>{
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();
  let homePage = new HomePage(page);
  await homePage.doLogin(mail,password,result,locator);
})
})