import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
imports: [
	CommonModule,
	IonicModule,
	],

	declarations: [HeaderComponent, FooterComponent],
	exports:[HeaderComponent, FooterComponent]


})

export class GlobalComponentsModule {}
