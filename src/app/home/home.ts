export class PictureSliderSectionWithInfoModel {
    private imagePath: string;
    private label: string;
    private details: PictureSliderDetailSectionWithInfoModel[];
  
    constructor(
      imagePath: string,
      label: string,
      details: PictureSliderDetailSectionWithInfoModel[]
    ){
      this.imagePath = imagePath;
      this.label = label;
      this.details = details;
    }
  
    getImagePath(){
      return this.imagePath;
    }
  
    getLabel(){
      return this.label;
    }
  
    getDetails(){
      return this.details;
    }
  }
  
  export class PictureSliderDetailSectionWithInfoModel{
    private icon: string;
    private label: string;
    private value: string;
  
    constructor(
      icon: string,
      label: string,
      value: string
    ) {
      this.icon = icon;
      this.label = label;
      this.value = value;
    }
  
    getIcon(){
      return this.icon;
    }
  
    getLabel(){
      return this.label;
    }
  
    getValue(){
      return this.value;
    }
  }