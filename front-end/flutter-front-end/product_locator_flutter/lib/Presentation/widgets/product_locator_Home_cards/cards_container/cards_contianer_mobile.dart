import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_container/cards_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_content/cards_content_mobile.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content_mobile.dart';

// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/cards_container.dart';

class ProductHomeContainerMobile extends StatelessWidget {
  const ProductHomeContainerMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: double.infinity,
        child: Column(children: [
          const HomeTitle(),
          Column(
            children: ProductHomeContainer.getCardsContent(),
          ),
        ]));
  }
}

class CardContainerLandscape extends StatelessWidget {
  const CardContainerLandscape({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(children: ProductHomeContainer.getCardsContent());
  }
}
