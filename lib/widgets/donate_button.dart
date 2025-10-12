import 'package:flutter/material.dart';

class DonateButton extends StatefulWidget {
  final Color accentColor;

  const DonateButton({
    super.key,
    required this.accentColor,
  });

  @override
  State<DonateButton> createState() => _DonateButtonState();
}

class _DonateButtonState extends State<DonateButton>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _scaleAnimation;
  bool _isHovered = false;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(milliseconds: 200),
      vsync: this,
    );
    _scaleAnimation = Tween<double>(
      begin: 1.0,
      end: 1.1,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeInOut,
    ));
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _onHover(bool isHovered) {
    setState(() {
      _isHovered = isHovered;
    });
    if (isHovered) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => _onHover(true),
      onExit: (_) => _onHover(false),
      child: AnimatedBuilder(
        animation: _scaleAnimation,
        builder: (context, child) {
          return Transform.scale(
            scale: _scaleAnimation.value,
            child: ElevatedButton.icon(
              onPressed: () {
                // TODO: Add donation link here
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Donation link will be added here'),
                  ),
                );
              },
              icon: Icon(
                Icons.favorite,
                color: _isHovered ? Colors.white : widget.accentColor,
              ),
              label: Text(
                'Donate',
                style: TextStyle(
                  color: _isHovered ? Colors.white : widget.accentColor,
                  fontWeight: FontWeight.bold,
                ),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: _isHovered 
                    ? widget.accentColor 
                    : Colors.transparent,
                foregroundColor: _isHovered 
                    ? Colors.white 
                    : widget.accentColor,
                side: BorderSide(
                  color: widget.accentColor,
                  width: 2,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(25),
                ),
                padding: const EdgeInsets.symmetric(
                  horizontal: 20,
                  vertical: 12,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
