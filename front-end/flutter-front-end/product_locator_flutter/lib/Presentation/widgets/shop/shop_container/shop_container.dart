import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/shop/shop_container/shop_contianer_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/shop/shop_content/shop_content.dart';

import 'package:flutter/material.dart';

// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';

class ShopContainer extends StatelessWidget {
  const ShopContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: ShopContainerMobile(),
        landscape: ShopContainerLandscape(),
      ),
    );
  }

  static List<Widget> getCardsContent() {
    return [
      ShopContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
      ShopContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
      ShopContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
      ShopContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
    ];
  }
}
