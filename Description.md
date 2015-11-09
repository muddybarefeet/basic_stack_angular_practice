Angular Stack Exercise

The app will have two views - a stack view and a stack editor view. In the stack editor view, the user can change the max stack size. In the stack view, the user can push items onto the stack (so long as it doesn’t exceed the max stack size) and can pop items from the stack. 

When switching between views, the stack should persist (the stack shouldn’t disappear if the user switches to the stack editor view and then back to the stack). If the user changes the max stack size to a number below what the current stack length is, the stack should automatically pop off the necessary number of items in the stack so that it conforms to the max stack size. 


*Use ng-repeat to render stack 
*Use form validation to validate maxStack is a number

* Angular routers
 -Switch between views 
* Factories
 -Should hold actual stack
 -Should have max stack 
* Controllers (has as dependancy the factory)
 -Access to buttons
 -Input field

