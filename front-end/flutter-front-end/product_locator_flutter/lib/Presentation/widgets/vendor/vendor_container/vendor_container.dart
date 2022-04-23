import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/vendor/vendor_container/vendor_container_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/vendor/vendor_content/vendor_content.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';
// import 'package:product_locator_flutter/widgets/profile_view_widget/profile_content/profile_content.dart';
// import 'package:product_locator_flutter/widgets/shop/shop_container/shop_contianer_mobile.dart';
// import 'package:product_locator_flutter/widgets/vendor/vendor_container/vendor_container_mobile.dart';
// import 'package:product_locator_flutter/widgets/vendor/vendor_content/vendor_content.dart';

class VendorContainer extends StatelessWidget {
  const VendorContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: VendorContainerMobile(),
        // landscape: CardContainerLandscape(),
      ),
    );
  }

  static List<Widget> vendorCards() {
    return [
      VendorContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset('assets/user_profile.jpg'),
      ),
    ];
  }
}
