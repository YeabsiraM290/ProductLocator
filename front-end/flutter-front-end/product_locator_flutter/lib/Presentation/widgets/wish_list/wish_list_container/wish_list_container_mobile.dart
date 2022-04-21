import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/widgets/product_locator_Home_cards/cards_content/cards_content_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/profile_view_widget/profile_conatiner/profile_container.dart';
import 'package:product_locator_flutter/Presentation/widgets/wish_list/wish_list_container/wish_list_container.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_content/cards_content_mobile.dart';

// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/cards_container.dart';
// import 'package:product_locator_flutter/widgets/profile_view_widget/profile_conatiner/profile_container.dart';
// import 'package:product_locator_flutter/widgets/vendor/vendor_container/vendor_container.dart';
// import 'package:product_locator_flutter/widgets/wish_list/wish_list_container/wish_list_container.dart';

class WishListContainerMobile extends StatelessWidget {
  const WishListContainerMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: double.infinity,
        child: Column(children: [
          const HomeTitle(),
          Column(
            children: WishListContainer.getCardsContent(),
          ),
        ]));
  }
}

class CardContainerLandscape extends StatelessWidget {
  const CardContainerLandscape({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(children: ProfileContainer.getCardsContent());
  }
}
