package korean.fashion.molinomobile;

import android.os.Bundle;
import org.apache.cordova.*;
import android.widget.LinearLayout;
import com.google.ads.*; 



public class KoreanfashionActivity extends DroidGap {

	private static final String MY_AD_UNIT_ID = "157f1426d6de4162";
	private AdView adView; 
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        

        adView = new AdView(this, AdSize.BANNER, MY_AD_UNIT_ID);
        LinearLayout layout = super.root;
        layout.addView(adView);
        adView.loadAd(new AdRequest()); 
      
    }
    
  
}