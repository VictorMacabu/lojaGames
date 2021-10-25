import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

  bundleres: any =[
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE COLEÇÃO BASICA 2020 CORE SET M20 PACOTE.png',
      name: 'MAGIC BUNDLE COLEÇÃO BASICA 2020 CORE SET M20 PACOTE',
      price: 'R$ 189,90',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE DRAGONS OF TARKIR FAT PACK.png',
      name: 'MAGIC BUNDLE DRAGONS OF TARKIR FAT PACK',
      price: 'R$ 149,90',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE GIFT EDITION DUNGEONS DRAGONS FORGOTTEN REALMS.png',
      name: 'MAGIC BUNDLE GIFT EDITION DUNGEONS DRAGONS FORGOTTEN REALMS',
      price: 'R$ 419,90',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE GIFT EDITION ZENDIKAR RISING INGLÊS.png',
      name: 'MAGIC BUNDLE GIFT EDITION ZENDIKAR RISING INGLÊS',
      price: 'R$ 349,90',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE INNISTRAD MIDNIGHT HUNT SET BOOSTER INGLÊS.png',
      name: 'MAGIC BUNDLE INNISTRAD MIDNIGHT HUNT SET BOOSTER INGLÊS',
      price: 'R$ 279,90',
    },
    {
      tipe: 'Bundle',
      pathImage: 'assets/imgMagic/bundle/MAGIC BUNDLE ZENDIKAR RISING PACOTE.png',
      name: 'MAGIC BUNDLE ZENDIKAR RISING PACOTE',
      price: 'R$ 249,90',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
