part of 'shop_bloc.dart';

class ShopState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class ShopInitState extends ShopState {}

class ShopLoadingState extends ShopState {}

class ShopFetchedState extends ShopState {
  final ShopModel shoplist;

  ShopFetchedState(this.shoplist);
  @override
  List<Object> get props => [shoplist];
}

class ShopErrorState extends ShopState {
  final String message;
  ShopErrorState({required this.message});
}
