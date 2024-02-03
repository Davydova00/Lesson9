
import { expect} from "@playwright/test";
export default class HomePage{

  constructor(page){
    this.page = page;
    this.join = page.locator((`//*[@id="root"]/div/header/div[1]/div/button`)).click();
    this.loginn = page.locator((`//*[@id="root"]/div/section/div[2]/div/div/section/div[1]/ul/li[2]/button`)).click();
    this.mail = page.locator(`//html/body/div[1]/div/section/div[2]/div/div/section/form/div[1]/input`);
    this.password = page.locator(`//html/body/div[1]/div/section/div[2]/div/div/section/form/div[2]/input`);
    this.submitBtn = page.locator(`//*[@id="root"]/div/section/div[2]/div/div/section/form/button`);
    this.message = page.locator(`//*[@id="root"]/div/section/div[2]/div/div/section/form/div[4]/
    div`);
}
  async doLogin(mail,password,result,locator){
    await this.page.goto('https://www.uadreams.com/');
    await this.mail.pressSequentially(mail);
    await this.password.pressSequentially(password);
    await this.submitBtn.click();
    expect(this.page.locator(locator)).toHaveText(result);
  }
}

export { HomePage };