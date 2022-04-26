import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_content/cards_content.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_container/cards_contianer_mobile.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content.dart';

class ProductHomeContainer extends StatelessWidget {
  const ProductHomeContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: ProductHomeContainerMobile(),
        landscape: CardContainerLandscape(),
      ),
      // tablet: OrientationLayout(
      //   portrait: CardContainerTabletPortrait(),
      //   landscape: CardContainerTabletLandscape(),
      // ),
    );
  }

  static List<Widget> getCardsContent() {
    return [
      ProductContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
        detail: Image.asset('assets/gamming_desktop.jpg', width: 120),
      ),
      ProductContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
        detail: Image.asset('assets/gamming_desktop.jpg'),
      ),
      ProductContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
        detail: Image.asset('assets/gamming_desktop.jpg'),
      ),
      ProductContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/gamming_desktop.jpg'),
        detail: Image.asset('assets/gamming_desktop.jpg'),
      ),
    ];
  }
}
