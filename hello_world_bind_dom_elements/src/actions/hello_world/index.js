@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Render
  @Autowire(name="helloWorldPage")
  this.page;

  @HtmlElement(id="firstName")
  this.firstNameInputTextElement;

  @HtmlElement(id="lastName")
  this.lastNameInputTextElement;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  @ActionListener(tagId="sendButton", type="onclick")
  this.sendButtonListener = (e) => {
    console.log("You clicked me at:"+new Date());
    console.log(this.firstNameInputTextElement.value);
    console.log(this.lastNameInputTextElement.value);
  };

}

module.exports = HelloWorldAction;
