# Toast Service

A centralized toast notification service for the application.

## Usage

```javascript
import { toastService } from '../utils/toast';

// Success toast
toastService.success('Operation completed successfully!');

// Error toast
toastService.error('An error occurred');

// Warning toast
toastService.warning('Please check your input');

// Info toast
toastService.info('Here is some information');

// Promise toast
toastService.promise(apiCall(), {
  pending: 'Loading...',
  success: 'Success!',
  error: 'Failed!'
});
```

## Configuration

Toast configuration can be customized in `toastConfig.js`.

## Examples

See `toastExamples.js` for usage examples.