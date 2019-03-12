import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal';
import { Config } from '../../config';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {
  payment: PayPalPayment = new PayPalPayment('30.00', 'USD', 'TV', 'sale');
  currencies = ['EUR', 'USD']
  constructor() { }

  ngOnInit() {
  }

  payPalEnvironment: string = 'payPalEnvironmentSandbox';

	makePayment() {
		PayPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
		}).then(() => {
			PayPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
				PayPal.renderSinglePaymentUI(this.payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, () => {
			console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
	}

}
