import { Component, OnInit } from '@angular/core';
import { User } from './../classes/user';
import { AuthService } from './../services/auth.service';
import { PaymentService } from './../services/payment.service';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [AuthService, PaymentService]
})
export class HeaderComponent implements OnInit {
    private title: string = 'emaily';
    private auth: User;
    private isLogged: boolean = false;
    private stripeCheckoutHandler: StripeCheckoutHandler;

    constructor(private authService: AuthService, private stripeCheckoutLoader: StripeCheckoutLoader, private paymentService: PaymentService) { }

    ngOnInit() {
        this.authService.fetchUser().then((userData) => {
            this.auth = userData;
            this.isLogged = !!this.auth.googleID;
        })
    }

    public ngAfterViewInit() {
        //TODO:AMUNOZ move public key to ENV VAR
        this.stripeCheckoutLoader.createHandler({
            key: 'pk_test_K1Ts6KPvTlBVoz9wU0y0hdlm',
            name: 'Emaily',
            description: '$5 for 500 credits',
            amount: 500,
            currency: 'USD',
            token: (token) => {
                this.paymentService.handleToken(token).then((res) => {
                    this.auth = res;
                })
            }
        }).then((handler: StripeCheckoutHandler) => {
            this.stripeCheckoutHandler = handler;
        });
    }

    public onClickBuy() {
        this.stripeCheckoutHandler.open({});
    }

    public onClickCancel() {
        this.stripeCheckoutHandler.close();
    }

}
