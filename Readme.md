# is-host

  Validate a string is a host (IPv4/-v6 or hostname) address.

## Installation
  
```
$ component install johntron/is-host
```
```
$ npm install is-host
```

## API

### As a stand-alone function

```
var is_host = require('is-host'),
	is_valid_host = is_host.validate('192.168.1.a');
```
	
### With segmentio/validate-form

```
var is_host = require('is-host'),
	validate = require('validate-form'),
	$form = document.querySelector('#host_form'),
	validator = validate($form).use(is_host).on('blur')
		.field('host').is('host');
		
	validator.validate(); // Validate now (instead of on blur)
```

## License

  MIT
