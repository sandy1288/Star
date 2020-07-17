let homepage = function () {
  let add_button = element(by.className('btn btn-create'));
  let title = element(by.xpath('//input[@placeholder="Enter title"]'));
  let Roadmap_dropdown_adddiseaseroadmap = element(by.xpath('//div[@class="deep-nested-select"]/select[1]'));
  let Save = element(by.css(".btn-save"));

  this.add_document = function (add) {
    add_button.click();
  };

  this.add_title = function (titlename) {
    title.clear();
  };

  this.createdocument = function (create) {
    Save.click();
  };

  this.adddiseaseroadmap = function (diseaseroadmap) {
    Roadmap_dropdown_adddiseaseroadmap.click();
  };

};
module.exports = new homepage();