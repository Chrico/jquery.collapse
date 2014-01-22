jquery.collapse
===============

##Description##
creating a collapse-nav with some wai-aria by default~

```html  	
	<div class="collapse">
		<a class="collapse-header" href="#">link</a>
		<div class="collapse-content">
			...
		</div>
	</div>
``` 

```js
$('.collapse').collapse();
```  	
  
  	
###Output###
```html
  	<div class="collapse">
		<a class="collapse-header" aria-controls="#c_01" href="#">link</a>
		<div id="c_01" aria-expanded="false" aria-hidden="true">
			...
		</div>
	</div>
```

###Events###
You can also use callbacks:

```js
$('.collapse').on('show', function(e){ });
$('.collapse').on('hide', function(e){ });
``` 

``` 
Object options {
  	attrHide  : Object,
	attrShow  : Object,
	classHide : String,
	classShow : String,
	targetClass : String
}
```

##Read More##
* [Aria-Expand and Aria-Controls](http://www.marcozehe.de/2010/02/10/easy-aria-tip-5-aria-expanded-and-aria-controls/)
