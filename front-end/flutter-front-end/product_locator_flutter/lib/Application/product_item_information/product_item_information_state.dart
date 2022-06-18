part of 'product_item_information_bloc.dart';

class ProductItemInformationGetState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class ProductItemInformationInitState extends ProductItemInformationGetState {}

class ProductItemInformationGetLoadingState
    extends ProductItemInformationGetState {}

class ProductItemInformationFetchedState
    extends ProductItemInformationGetState {
  final FoodItemInformationModel productItemInformation_list;

  ProductItemInformationFetchedState(this.productItemInformation_list);

  @override
  List<Object> get props => [
        productItemInformation_list,
      ];
}

class ProdductItemInformationErrorState extends ProductItemInformationGetState {
  final String message;
  ProdductItemInformationErrorState({required this.message});
}
