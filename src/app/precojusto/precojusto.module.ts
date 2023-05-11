import { FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core'
import { PrecojustoComponent } from './precojusto.component'

@NgModule(
    {
        declarations: [PrecojustoComponent],
        exports: [PrecojustoComponent],
        imports: [FormsModule]
    }
)

export class PrecoJustoModule{
    
}